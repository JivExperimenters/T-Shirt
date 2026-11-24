# T-Shirt Store Plan & GitHub Pages Prototype (IS117-007)

**Student:** Jivitesh Duddu · **Checkpoint:** T-shirt Plan (Due December 1, 2026 at 8:30 a.m. Eastern)  
**Target Audience Carried Forward:** **Maya, 20** (Creative College Student & Indie Buyer shopping for 1–3 expressive graphic tees with clear fit, fabric weight, and upfront delivered cost).

This plan builds directly on our November 5 competitive research ([Crazy Dog T-Shirts](https://www.crazydogtshirts.com/), [CheapesTees](https://www.cheapestees.com/), and [Jiffy](https://www.jiffy.com/)) and peer feedback ([Issues #3, #4, #10, #12, #13, #14](https://github.com/JivExperimenters/T-Shirt/issues?q=is%3Aissue+state%3Aclosed)). It keeps the build scope small for a **GitHub Pages static storefront + simulated checkout (`public/store.html`)** using **browser `localStorage`** and **demo data only** (no real payment or customer information).

## 1. Compare Two Ways to Shop for the Same Shirt (for Maya, 20)

| Dimension | Approach A (Chosen): Curated Graphic Storefront + Fit-Confidence Picker + Transparent Demo Checkout | Approach B (Alternative Not Chosen): Open-Canvas DIY Customizer Studio |
| --- | --- | --- |
| **How Maya Shops for the Same Shirt** | Maya browses a calm 4-column Modernist grid of original campus/gaming/indie graphic tees (`$18.00` base), selects her size (`S–3XL`) with exact pricing visible, reads a 3-bar wearer review summary (*Fit, Softness, Wash Durability*), and completes a simulated checkout with an upfront ZIP shipping estimator saved to browser `localStorage`. | Maya opens a blank shirt canvas (similar to Jiffy's *Create Mockup* flow in `E11–E12`), uploads custom artwork, resizes print dimensions, and orders a one-off custom DTF shirt. |
| **Why It Fits / Doesn't Fit Our Research** | Solves the three main frictions from our audit: removes Crazy Dog's spin-wheel clutter (`E01`) and missing fabric weight (`E03`), eliminates CheapesTees' preselected `$0.49` protection fee (`E08`), and adapts Jiffy's upfront size-tier pricing (`E11`). Runs 100% statically on GitHub Pages. | In our Jiffy audit (`E12`), a single custom-printed shirt with rush shipping cost `$48.33` (`$38.38` item + `$9.95` delivery)—far above Maya's `$16–$22` student budget—and adds heavy canvas complexity before core sizing and checkout clarity are proven. |
| **Technology Fit (GitHub Pages + `localStorage`)** | Static HTML/CSS/JS on **GitHub Pages** (`public/store.html`) using browser `localStorage` (`jivitesh_tee_cart`, `jivitesh_tee_orders`)—zero backend hosting required and instant save-and-reload testing. | Would require server-side image storage, bounding-box state, and per-square-inch DTF pricing rules. |
| **Decision** | **Chosen for v1 Build:** Small, focused, and easy to test on GitHub Pages in a 5-peer walkthrough. | **Deferred:** Kept as a future v2 idea once core sizing and demo checkout are verified. |

## 2. Carry Forward: Brand Promise, Visual Choices & Two Honest Persuasion Elements

* **Brand Promise:** *"Original campus and indie graphic tees presented in a calm, uncluttered store—with exact fabric specs, real wearer fit feedback, and zero surprise checkout fees."*
* **Brand Character ([Pearson Archetypes](https://carolspearson.com/about/the-pearson-12-archetype-system-human-development-and-evolution)):** Primary **Creator** (original student/indie graphic design) supported by **Everyperson** (transparent everyday pricing) and light **Jester** wit inside the shirt artwork itself.
* **Visual Choices ([V&A Modernism](https://www.vam.ac.uk/articles/what-was-modernism) vs. [Postmodernism](https://www.vam.ac.uk/articles/what-is-postmodernism)):** Restrained 4-column **Modernist** storefront grid (2 columns on mobile), generous whitespace, high-contrast sans-serif typography, and **zero floating spin-the-wheel overlays** (`E01`), while letting the shirt illustrations carry the expressive personality ([Issue #12](https://github.com/JivExperimenters/T-Shirt/issues/12)).
* **Honest Persuasion Element 1 — Verifiable Social Proof (Attribute-Organized Wearer Reviews):** Summarizes wearer feedback across *Fit (Runs Small / True to Size / Runs Large)*, *Fabric Softness (`1–5`)*, and *After-Wash Print Quality (`1–5`)*, labeling reviewer height and size ordered only when provided ([Issue #10](https://github.com/JivExperimenters/T-Shirt/issues/10)) and never fabricating urgency counters.
* **Honest Persuasion Element 2 — Honest Reciprocity & Risk Reduction:** Shows an open `10%` student promo code (`CAMPUS10`) in a quiet top ribbon (no email gate, adapted from Jiffy `E09`) and displays a ZIP-code shipping estimate (`$4.99` flat standard shipping or `$0.00` Free Shipping at `$45+`) inside the cart with **zero preselected `$0.49` protection fees** (fixing `E04` and `E08`).

## 3. Five User Stories, Essential Features & Observable Checks

| ID & User Story (for Maya, 20) | Essential Feature | Observable Verification Check *(Planned until run)* |
| --- | --- | --- |
| **US-1: Fast Catalog Scan & Fabric Clarity**<br>*As Maya, I want to see each shirt's graphic, base price, and exact fabric weight on the main grid without pop-ups so I can compare shirts in under 5 seconds.* | • 4-column responsive product grid (`public/store.html`).<br>• Each card shows title, fabric weight (`6.1 oz 100% US Ringspun Cotton`), base price (`$18.00`), and review summary.<br>• Quiet top banner with open code `CAMPUS10`. | **Check 1 (Planned):** A classmate opens the GitHub Pages storefront, states the base price and fabric weight of *Compiler Error Tee* within 5 seconds, and confirms zero pop-up modals block the screen. |
| **US-2: Per-Size Price & Fit-Confidence Selection**<br>*As Maya, I want to see the exact price for every size (`S–3XL`) and read a 3-bar Fit / Softness / Wash-Durability summary before clicking "Add to Cart" so I can pick my size without guessing.* | • Size selector pills (`S–XL` at `$18.00`; `2XL` at `$20.00`; `3XL` at `$21.00`) updating the displayed price immediately (`E11`).<br>• 3-bar attribute summary (`Runs Small / True to Size / Runs Large`, Softness, Wash Durability). | **Check 2 (Planned):** A classmate clicks `2XL` on a product card, states the updated `$20.00` price before adding to cart, and reads the 3-bar fit summary without opening a separate chart. |
| **US-3: Persistent Browser Cart & Upfront ZIP Shipping Estimator**<br>*As Maya, I want my cart saved in the browser and want to see my ZIP shipping cost and `CAMPUS10` discount with no preselected extra fees.* | • Cart state saved in `localStorage` (`jivitesh_tee_cart`).<br>• Inline ZIP estimator (`$4.99` standard or `$0.00` at `$45+`) + `CAMPUS10` (`-10%`) calculation + `$0.00` pre-checked fees. | **Check 3 (Planned — Save & Reload):** Add 1 shirt (`$18.00`, Size M) to the cart, enter ZIP `07405`, verify `$21.19` delivered total (`$18.00 - $1.80 + $4.99`), reload the browser tab, and confirm the cart item remains saved. |
| **US-4: Simulated Demo Checkout & Save-and-Reload Order Receipt**<br>*As Maya, I want to submit a demo order (using fictional demo name, campus alias, and ZIP—no real payment data) and see the same order receipt after reloading the page.* | • Simulated checkout form saving `{ orderId, demoLabel, items, subtotal, discount, shipping, total, zip, createdAt }` to `localStorage` (`jivitesh_tee_orders`).<br>• **Saved Demo Orders** panel rendering saved receipts on page load. | **Check 4 (Planned — Save & Reload):** Submit a demo order (`Maya Lin (Demo)`), record the generated Order ID (e.g., `DEMO-1001`), refresh/reopen the GitHub Pages URL, and verify the exact same order receipt appears in **Saved Demo Orders**. |
| **US-5: Readable Phone Layout & Keyboard Navigation**<br>*As Maya shopping on a phone between classes, I want the size pills and cart drawer to fit cleanly on a narrow screen and work with keyboard navigation.* | • Responsive CSS Grid (`>= 16px` body text, `>= 44x44px` tap targets) and semantic `<button>` / `<label>` elements with `:focus-visible` outlines. | **Check 5 (Planned):** Open the prototype at `375px` width (zero horizontal overflow) and navigate from catalog to checkout using only `Tab` and `Enter`. |

## 4. Simulated Checkout & Browser Storage Starter (`Save & Reload`)

Per the assignment instructions (*"Plan a simulated checkout and the order data JavaScript will save in the browser"*), our GitHub Pages prototype (`public/store.html`) uses **JavaScript `localStorage`** with **demo data only**:

* **What JavaScript Saves in the Browser (`localStorage`):**
  1. `jivitesh_tee_cart`: Array of selected items (`{ id, title, size, unitPriceCents, quantity }`).
  2. `jivitesh_tee_orders`: Array of simulated demo order receipts (`{ orderId, demoCustomerLabel, zipCode, promoCode, subtotalCents, discountCents, shippingCents, totalCents, items, timestamp }`).
* **Changes Explained from the Browser Storage Starter:**
  1. Added **server-free per-size pricing rules** (`2XL +$2.00`, `3XL +$3.00`) and `CAMPUS10` (`-10%`) + `$45+` free-shipping threshold math directly in the cart calculation.
  2. Enforced **Demo Data Only** labeling (`DEMO ESTIMATE — No real payment or customer PII collected`) so no credit card fields, street addresses, or real personal emails are ever requested or stored.

## 5. React Documentary Idea Applied to My Store

After watching [React.js: The Documentary (CultRepo / Honeypot)](https://www.youtube.com/watch?v=8pDqJVdNa44), I applied two core concepts from the film to this T-shirt storefront plan:

* **Declarative UI Driven by Explicit State:** In the documentary, Jordan Walke explains that traditional front-end UI bugs come from manually finding and patching individual DOM nodes when data changes—whereas React models the UI as a clean re-render from current **state** (such as the Like button example: *0 likes vs. 1 like vs. 40 likes*).
  * **Example on My Store (`public/store.html`):** Instead of manually patching separate price tags and summary lines when Maya clicks a size or types a promo code, a single `render()` function recomputes the product price, cart count, `CAMPUS10` discount, shipping threshold (`$45+`), and **Saved Demo Orders** list directly from the current `selectedSizes`, `cart`, and `orders` state.
* **Reusable Components Over Duplicated Markup:** As the documentary highlights when teams think atomically about UI building blocks, each T-shirt card follows one reusable **ProductCard** structure (*title, fabric weight, size-price pills, 3-bar fit summary, Add button*) so updating one layout rule updates the whole catalog consistently.

## 6. Quality, Accessibility, Privacy & Analytics Plan *(Planned Checks)*

| Requirement | Concrete Plan & Target Signal | Status |
| --- | --- | --- |
| **1. Keyboard Accessibility Check** | Navigate `store.html` and the VitePress docs using **only `Tab`, `Shift+Tab`, and `Enter`** (no mouse) to verify visible focus rings on every size pill, Add-to-Cart button, and checkout submit button. | **Planned (not yet run)** |
| **2. Phone-Layout Check** | Test `store.html` and `/plan` at a **`375px` mobile viewport** to confirm zero horizontal scrolling, readable text (`>= 16px`), and `>= 44x44px` tappable size buttons. | **Planned (not yet run)** |
| **3. Protecting Private Data** | **Demo data only:** The simulated checkout accepts only a fictional display name and 5-digit ZIP code (`07405`)—zero credit cards, passwords, real street addresses, or personal phone/email fields are collected or saved in `localStorage`. | **Active Design Rule** |
| **4. Usage Measure & Analytics Option** | **Useful Usage Measure:** *Cart-to-Demo-Order completion rate and frequency of `2XL/3XL` size-pill clicks* (shows whether upfront size pricing reduces hesitation).<br>**Planned Analytics Option (no live tracker installed for this checkpoint):** **Cloudflare Web Analytics** (free, cookie-free) or **Google Analytics 4** once the build is finalized. | **Planned (no live tracker installed)** |
