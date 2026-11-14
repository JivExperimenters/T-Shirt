// IS117-007 T-Shirt Store SQLite Backend (Adapted from Campus Cotton: run -> save -> reopen)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "db", "store.sqlite");
const SCHEMA_PATH = path.join(__dirname, "db", "schema.sql");

fs.mkdirSync(path.join(__dirname, "db"), { recursive: true });
execFileSync("sqlite3", [DB_PATH, `.read ${SCHEMA_PATH}`]);

function queryJSON(sql) {
  const out = execFileSync("sqlite3", ["-json", DB_PATH, sql], { encoding: "utf8" }).trim();
  return out ? JSON.parse(out) : [];
}

function runSQL(sql) {
  execFileSync("sqlite3", [DB_PATH, sql]);
}

function esc(val) {
  return String(val ?? "").replace(/'/g, "''");
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/store.html")) {
    const html = fs.readFileSync(path.join(__dirname, "public", "store.html"), "utf8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (req.method === "GET" && url.pathname === "/api/state") {
    const products = queryJSON("SELECT * FROM products ORDER BY id;");
    const reviews = queryJSON("SELECT * FROM reviews ORDER BY id DESC;");
    const cart = queryJSON(
      "SELECT c.id, c.product_id, p.title, c.size, c.unit_price_cents, c.quantity FROM cart_items c JOIN products p ON p.id = c.product_id ORDER BY c.id;"
    );
    const orders = queryJSON("SELECT * FROM orders ORDER BY id DESC;");
    const orderItems = queryJSON("SELECT * FROM order_items ORDER BY id;");
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ products, reviews, cart, orders, orderItems }));
  }

  if (req.method === "POST" && url.pathname === "/api/cart") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { product_id, size, quantity = 1 } = JSON.parse(body || "{}");
      const prod = queryJSON(`SELECT * FROM products WHERE id = ${Number(product_id)};`)[0];
      if (!prod) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: "Invalid product" }));
      }
      let price = prod.base_price_cents;
      if (size === "2XL") price += prod.upcharge_2xl_cents;
      if (size === "3XL") price += prod.upcharge_3xl_cents;
      runSQL(
        `INSERT INTO cart_items (product_id, size, unit_price_cents, quantity) VALUES (${Number(product_id)}, '${esc(size)}', ${price}, ${Number(quantity)});`
      );
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
    });
    return;
  }

  if (req.method === "DELETE" && url.pathname.startsWith("/api/cart/")) {
    const id = Number(url.pathname.split("/").pop());
    runSQL(`DELETE FROM cart_items WHERE id = ${id};`);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true }));
  }

  if (req.method === "POST" && url.pathname === "/api/orders") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { customer_name, campus_email, zip_code, promo_code = "" } = JSON.parse(body || "{}");
      const cart = queryJSON(
        "SELECT c.id, p.title, c.size, c.unit_price_cents, c.quantity FROM cart_items c JOIN products p ON p.id = c.product_id;"
      );
      if (!cart.length) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Cart is empty" }));
      }
      const subtotal = cart.reduce((s, item) => s + item.unit_price_cents * item.quantity, 0);
      const discount = promo_code.trim().toUpperCase() === "CAMPUS10" ? Math.round(subtotal * 0.1) : 0;
      const afterDiscount = subtotal - discount;
      const shipping = afterDiscount >= 4500 ? 0 : 499;
      const total = afterDiscount + shipping;

      runSQL(
        `INSERT INTO orders (customer_name, campus_email, zip_code, promo_code, subtotal_cents, discount_cents, shipping_cents, total_cents) VALUES ('${esc(customer_name)}', '${esc(campus_email)}', '${esc(zip_code)}', '${esc(promo_code.toUpperCase())}', ${subtotal}, ${discount}, ${shipping}, ${total});`
      );
      const orderRow = queryJSON("SELECT id FROM orders ORDER BY id DESC LIMIT 1;")[0];
      for (const item of cart) {
        runSQL(
          `INSERT INTO order_items (order_id, product_title, size, unit_price_cents, quantity) VALUES (${orderRow.id}, '${esc(item.title)}', '${esc(item.size)}', ${item.unit_price_cents}, ${item.quantity});`
        );
      }
      runSQL("DELETE FROM cart_items;");
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true, order_id: orderRow.id }));
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/reviews") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { product_id, fit_vote, softness_score, wash_score, reviewer_height, size_ordered, comment } = JSON.parse(body || "{}");
      runSQL(
        `INSERT INTO reviews (product_id, fit_vote, softness_score, wash_score, reviewer_height, size_ordered, comment) VALUES (${Number(product_id)}, '${esc(fit_vote)}', ${Number(softness_score)}, ${Number(wash_score)}, '${esc(reviewer_height)}', '${esc(size_ordered)}', '${esc(comment)}');`
      );
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
    });
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`T-Shirt SQLite Store running at http://localhost:${PORT} (DB: ${DB_PATH})`);
});
