# T-Shirt Store Plan & SQLite Architecture (IS117-007)

**Student:** Jivitesh Duddu · **Checkpoint:** T-Shirt Plan (Due November 17, 2026)  
**Target Audience Carried Forward:** **Maya, 20** (Creative College Student & Indie Buyer shopping for 1–3 expressive graphic/custom tees with clear fit, fabric weight, and upfront delivered cost).

This plan translates our November 5 competitive research ([Crazy Dog T-Shirts](https://www.crazydogtshirts.com/), [CheapesTees](https://www.cheapestees.com/), and [Jiffy](https://www.jiffy.com/)) into a concrete build plan. It compares two implementation approaches for Maya, defines five user stories with essential features and observable verification checks, carries forward our Brand Studio direction and two honest persuasion elements, and includes a working **SQLite backend (`server.js` + `db/schema.sql`)** adapted from the course *Campus Cotton* (`run → save → reopen`) starter.

## 1. Compare Two Concise Approaches for Our Chosen Audience (Maya, 20)

| Dimension | Approach A (Chosen): Curated Graphic Storefront + Fit-Confidence Picker + Transparent SQLite Checkout | Approach B (Alternative Not Chosen): Open-Canvas DIY Customizer Studio |
| --- | --- | --- |
| **Core Experience for Maya** | Maya browses a calm 4-column Modernist grid of original campus/gaming/indie graphic tees (`$18.00` base), checks exact per-size pricing (`S–3XL`) and a 3-bar wearer review summary (*Fit, Softness, Wash Durability*), and checks out with an upfront ZIP shipping estimator and zero preselected add-on fees. | Maya opens a blank shirt canvas (similar to Jiffy's *Create Mockup* flow in `E11–E12`), uploads custom artwork, resizes print dimensions, and orders a one-off custom DTF shirt. |
| **Why It Fits / Doesn't Fit Our Research** | Directly solves the three biggest friction points from our audit: removes Crazy Dog's spin-wheel clutter (`E01`) and missing fabric weight (`E03`), eliminates CheapesTees' preselected `$0.49` protection fee (`E08`), and adapts Jiffy's upfront size-tier pricing (`E11`). | In our Jiffy audit (`E12`), a single custom-printed shirt with rush shipping cost `$48.33` (`$38.38` item + `$9.95` delivery)—far above Maya's `$16–$22` student budget—and requires complex canvas rendering before core sizing and checkout clarity are proven. |
| **SQLite Backend Scope** | Clean relational schema (`products`, `reviews`, `cart_items`, `orders`, `order_items`) that persists cart selections, simulated checkout receipts, and wearer fit reviews across server restarts (`run → save → reopen`). | Requires storing uploaded binary image blobs, bounding-box coordinates, and per-square-inch DTF transfer pricing rules in SQLite. |
| **Decision** | **Chosen for v1 Build:** Focused, testable in a 5-peer classroom walkthrough, and directly proves our research hypotheses. | **Deferred:** Kept as a future v2 feature once the curated graphic catalog and SQLite checkout are verified. |

## 2. Carry Forward: Brand Promise, Visual Choices & Two Honest Persuasion Elements

### Brand Promise & Character
* **Brand Promise:** *"Original campus and indie graphic tees presented in a calm, uncluttered store—with exact fabric specs, real wearer fit feedback, and zero surprise checkout fees."*
* **Brand Character ([Pearson Archetypes](https://carolspearson.com/about/the-pearson-12-archetype-system-human-development-and-evolution)):** Primary **Creator** (original student/indie graphic design) supported by **Everyperson** (transparent everyday pricing) and a touch of **Jester** wit inside the shirt artwork itself.

### Visual Choices (Reusing Brand Studio & SPEC)
* **Restrained Modernist Storefront Grid ([V&A Modernism](https://www.vam.ac.uk/articles/what-was-modernism)):** Up to 4 product cards per row on desktop (2 on mobile), high-contrast sans-serif typography, generous whitespace, and **no floating spin-the-wheel overlays** (`E01`).
* **Expressive Shirt Graphics ([V&A Postmodernism](https://www.vam.ac.uk/articles/what-is-postmodernism)):** The interface layout stays strictly minimalist and functional while the T-shirt illustrations and collection titles carry the expressive, playful personality.

### Two Honest Persuasion Elements ([Cialdini Principles](https://cialdini.com/principles))
1. **Honest Social Proof (Attribute-Organized Wearer Reviews):** Instead of unverified star badges alone (`E02`), product pages summarize SQLite-backed wearer reviews across three concrete bars—*Fit (Runs Small / True to Size / Runs Large)*, *Fabric Softness (`1–5`)*, and *After-Wash Print Quality (`1–5`)*—displaying reviewer height and size ordered only when genuinely provided and never fabricating urgency counters.
2. **Honest Reciprocity & Risk Reduction (Open Student Offer + Opt-In-Only Cart):** Displays an open `10%` student promo code (`CAMPUS10`) in a quiet top banner (no email gate required, adapted from Jiffy `E09`) and shows a ZIP-code shipping estimate (`$4.99` flat standard shipping or `$0.00` Free Shipping at `$45+`) directly inside the cart with **zero preselected `$0.49` protection add-ons** (fixing `E04` and `E08`).

## 3. Five User Stories, Essential Features & Observable Verification Checks

| ID & User Story (for Maya, 20) | Essential Feature (UI + SQLite Backend) | Observable Verification Check (Classmate Walkthrough) |
| --- | --- | --- |
| **US-1: Fast Catalog Scan & Fabric Clarity**<br>*As Maya, I want to see each shirt's graphic, base price, and exact fabric weight on the main grid without pop-up interruptions so I can compare shirts in under 5 seconds.* | • 4-column responsive product grid populated via `GET /api/products` from SQLite.<br>• Each card shows thumbnail, title, fabric weight (`6.1 oz 100% US Ringspun Cotton`), base price (`$18.00`), and review count.<br>• Quiet top banner with open code `CAMPUS10`. | **Check 1:** A classmate opens the store, states the base price and fabric weight of *Compiler Error Tee* within 5 seconds, and confirms zero pop-up modals block the screen. |
| **US-2: Per-Size Price & Fit-Confidence Selection**<br>*As Maya, I want to see the exact price for every size (`S–3XL`) and read a 3-bar Fit / Softness / Wash-Durability summary before clicking "Add to Cart" so I can pick my size without guessing.* | • Size selector pills (`S, M, L, XL` at `$18.00`; `2XL` at `$20.00`; `3XL` at `$21.00`) that update the displayed price immediately (`E11`).<br>• 3-bar attribute summary queried from the SQLite `reviews` table (`GET /api/products/:id/reviews`). | **Check 2:** A classmate clicks `2XL` on a product card/detail view, states the updated `$20.00` price before adding to cart, and reads the 3-bar fit summary without opening a separate chart. |
| **US-3: Persistent SQLite Cart & Upfront Shipping Estimator**<br>*As Maya, I want my cart items saved in SQLite and want to see my ZIP-code shipping cost and `CAMPUS10` discount in the cart with no preselected extra fees.* | • Cart API (`GET /api/cart`, `POST /api/cart`, `DELETE /api/cart/:id`) writing to the SQLite `cart_items` table.<br>• Inline ZIP estimator (`07405` / `07102` -> `$4.99` standard shipping, or `$0.00` when subtotal `>= $45.00`) and `CAMPUS10` (`-10%`) toggle.<br>• No pre-checked `$0.49` shipping protection toggle (`E08`). | **Check 3 (`Run → Save → Reopen`):** Add 1 shirt to the cart, enter ZIP `07405`, verify the exact delivered total (`$18.00 - $1.80 promo + $4.99 shipping = $21.19`), restart the server/reload the browser, and confirm the cart item persists from SQLite. |
| **US-4: Simulated Checkout & Persistent SQLite Order Receipt**<br>*As Maya, I want to submit a simulated order (name, campus email, ZIP code, and delivery option without real payment data) and see my saved order confirmation reload from SQLite.* | • Simulated checkout endpoint (`POST /api/orders`) that validates inputs, inserts into SQLite `orders` and `order_items` tables inside a database transaction, clears `cart_items`, and returns a persistent Order ID.<br>• Saved Orders list (`GET /api/orders`) showing past receipts. | **Check 4 (`Run → Save → Reopen`):** Submit a simulated order, record the Order ID, stop the Node server, restart it, reopen the page, and verify that the saved order receipt still appears in the **Saved Orders (SQLite)** section. |
| **US-5: Persistent Wearer Fit Review Submission**<br>*As a student buyer, I want to submit a fit rating (`Runs Small / True to Size / Runs Large`), softness score (`1–5`), and optional height/size note that saves to SQLite and updates the shirt's review summary.* | • Review form (`POST /api/products/:id/reviews`) inserting into the SQLite `reviews` table and recalculating the product's review count and fit distribution. | **Check 5 (`Run → Save → Reopen`):** Submit a new review on a shirt, restart/reopen the page, and verify that the new review text and updated count load from SQLite. |

## 4. Simulated Checkout & Working SQLite Backend (`Campus Cotton` Starter Adaptation)

Per the assignment requirement (*"SQLite starter: Campus Cotton first → run → save → reopen. Use this supported code if helpful; explain your changes. A public browser-storage preview alone does not meet SQLite"*), our repository includes a working Node.js + SQLite backend (`server.js` and `db/schema.sql`) and interactive storefront (`public/store.html`).

### How We Adapted the *Campus Cotton* Starter (and Why `localStorage` Alone Is Not Used)
* **Why SQLite instead of Browser Storage:** `localStorage` only saves data inside one browser tab on one device and disappears when site data is cleared. Our `server.js` backend uses a real on-disk **SQLite database (`db/store.sqlite`)** so products, cart items, simulated checkout orders, and wearer fit reviews persist on the server across restarts.
* **Changes Made from the *Campus Cotton* Starter Pattern:**
  1. **Added Per-Size Upcharges & Fabric Metadata (`products` table):** Added `fabric_weight` (`6.1 oz Ringspun Cotton`), `fit_note` (`True to Size`), and `upcharge_2xl_cents` / `upcharge_3xl_cents` so size pricing is enforced on the server, not just in client JavaScript.
  2. **Added Transparent Cart & Fee-Free Simulated Checkout (`cart_items`, `orders`, `order_items` tables):** Stores `zip_code`, `promo_code` (`CAMPUS10`), `discount_cents`, and `shipping_cents` (`$4.99` flat standard shipping or `$0.00` over `$45`), and hard-codes `prechecked_fee_cents = 0` so no hidden or opt-out protection fees are ever added.
  3. **Added Attribute-Specific Wearer Reviews (`reviews` table):** Stores `fit_vote` (`small`, `true`, `large`), `softness_score` (`1–5`), `wash_score` (`1–5`), and optional `reviewer_height` / `size_ordered` to power our 3-bar social proof summary.

### SQLite Database Schema (`db/schema.sql`)

```sql
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  fabric_weight TEXT NOT NULL,
  base_price_cents INTEGER NOT NULL,
  upcharge_2xl_cents INTEGER NOT NULL DEFAULT 200,
  upcharge_3xl_cents INTEGER NOT NULL DEFAULT 300,
  fit_summary TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cart_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  size TEXT NOT NULL,
  unit_price_cents INTEGER NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_name TEXT NOT NULL,
  campus_email TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  promo_code TEXT,
  subtotal_cents INTEGER NOT NULL,
  discount_cents INTEGER NOT NULL DEFAULT 0,
  shipping_cents INTEGER NOT NULL,
  total_cents INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  product_title TEXT NOT NULL,
  size TEXT NOT NULL,
  unit_price_cents INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  fit_vote TEXT NOT NULL CHECK(fit_vote IN ('Runs Small', 'True to Size', 'Runs Large')),
  softness_score INTEGER NOT NULL CHECK(softness_score BETWEEN 1 AND 5),
  wash_score INTEGER NOT NULL CHECK(wash_score BETWEEN 1 AND 5),
  reviewer_height TEXT,
  size_ordered TEXT,
  comment TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### How to Run, Save, and Reopen Locally (`Run → Save → Reopen`)
1. **Run:** In the repository root, run `node server.js` (uses Node's built-in `node:sqlite` / `sqlite3` CLI wrapper with zero external native compilation required) and open `http://localhost:3000`.
2. **Save:** Select a shirt and size (`S–3XL`), click **Add to SQLite Cart**, enter ZIP `07405`, apply `CAMPUS10`, fill in the **Simulated Checkout** form (name + campus email), and click **Place Simulated Order**. Note the saved Order ID in the **Saved SQLite Orders** table.
3. **Reopen:** Stop the server (`Ctrl+C`), run `node server.js` again, and refresh `http://localhost:3000` (or inspect `db/store.sqlite`). Your saved orders and submitted wearer reviews reload directly from the SQLite database file on disk.
