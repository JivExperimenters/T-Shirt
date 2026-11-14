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

INSERT OR IGNORE INTO products (id, slug, title, category, fabric_weight, base_price_cents, upcharge_2xl_cents, upcharge_3xl_cents, fit_summary) VALUES
  (1, 'compiler-error-tee', 'Compiler Error: Works on My Machine Tee', 'Gaming & Tech', '6.1 oz 100% US Ringspun Cotton', 1800, 200, 300, 'True to Size (92% of wearers)'),
  (2, 'night-owl-pixel-tee', 'Newark Night Owl Pixel Art Tee', 'Indie Art', '6.1 oz 100% US Ringspun Cotton', 1900, 200, 300, 'True to Size (Relaxed unisex cut)'),
  (3, 'final-boss-midterm-tee', 'Final Boss: 8:30 AM Lecture Tee', 'Campus Humor', '5.3 oz Combed Ringspun Cotton', 1600, 200, 300, 'True to Size (Pre-shrunk)');

INSERT OR IGNORE INTO reviews (id, product_id, fit_vote, softness_score, wash_score, reviewer_height, size_ordered, comment) VALUES
  (1, 1, 'True to Size', 5, 5, '5 ft 9 in', 'M', 'Heavyweight collar stays flat after dorm dryer; print did not crack.'),
  (2, 1, 'True to Size', 4, 5, '5 ft 4 in', 'S', 'Relaxed fit without looking boxy. Glad the 6.1 oz weight was listed upfront.'),
  (3, 2, 'True to Size', 5, 4, '6 ft 0 in', 'L', 'Soft ringspun feel right out of the package.');
