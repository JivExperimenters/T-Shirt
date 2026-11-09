# Competitor comparison

The audit compared public US desktop pages for one first-time shopper buying a short-sleeve crewneck in Small or Medium. Pages were checked November 4–5, 2026; the screenshots in this repository were captured November 5. The products are not identical, so their prices are comparisons of observed examples—not like-for-like market prices.

## At a glance

| Competitor | Role in the audit | Observed item / cart cost | What the experience demonstrates |
| --- | --- | --- | --- |
| [Crazy Dog T-Shirts](https://www.crazydogtshirts.com/) | Novelty and humor graphic tees | Selected shirt: `$14.99`; shipping and tax deferred | Distinctive humor can attract attention, but intrusive prompts and incomplete cart costs can distract or create uncertainty. |
| [CheapesTees](https://www.cheapestees.com/) | Wholesale blanks and custom basics | Gildan 3000 White, M: `$2.98`; cart subtotal `$3.47` with preselected `$0.49` Shipping Protection | A scannable catalog and low unit prices help comparison; a preselected add-on makes the cart total feel less transparent. |
| [Jiffy](https://www.jiffy.com/) | Blank apparel, transfers, and custom printing | C1717 blank: `$6.28` White / `$7.53` Butter in the report; custom cart item `$38.38`, with `$9.95` rush delivery selected (`$48.33` total) | Delivery estimates and size-tier prices can reduce uncertainty; custom printing and rush delivery can change the total substantially. |

## Crazy Dog T-Shirts — expressive humor

Sources: [homepage](https://www.crazydogtshirts.com/), [selected product page](https://www.crazydogtshirts.com/products/mens-cant-work-today-arm-is-in-a-cast-tshirt-funny-fathers-day-fishing-tee-for-guys), and cart captured during the audit. See [E01–E04](./screenshots.md#crazy-dog-t-shirts).

| Evidence | Observation from the capture |
| --- | --- |
| `E01` — Homepage | “52 Taco Tuesdays” hero, mailing-list discount bar, and a “Spin the wheel!” widget. The discount amount was not verified without submitting an email. |
| `E02` — Category | “Most Loved” grid of novelty tees; displayed items show `$14.99` against a crossed-out `$18.99` and “Save $4.” The report does not verify whether `$18.99` is a regular price. |
| `E03` — Product | “Can't Work Today My Arm Is In A Cast” in Heather Navy, size S, listed at `$14.99`; sizes `S–5XL` appear. Fabric weight and shipping cost are not visible above the fold. |
| `E04` — Cart | One item totals `$14.99`; shipping and taxes are deferred until checkout. |

**Interpretation:** The humor and pop-culture references suggest a Jester character and a postmodern visual voice. The product grid and buy box are recognizable e-commerce patterns, but the floating prompt competes for attention. Humor and expressive design are useful ideas; late shipping information and missing garment details are not.

## CheapesTees — wholesale utility

Sources: [homepage](https://www.cheapestees.com/), [Gildan collection](https://www.cheapestees.com/collections/gildan-t-shirts), and [Gildan 3000 page](https://www.cheapestees.com/products/gildan-unisex-light-cotton-t-shirt-3000). See the [E05–E08 screenshot gallery](./screenshots.md).

| Evidence | Observation from the capture |
| --- | --- |
| `E05` — Homepage | “Custom tees, made easy,” “Wholesale Prices,” and a “Free Shipping at $69” badge. The free-shipping offer has a minimum. |
| `E06` — Category | A six-column grid displays product prices, ratings, review counts, and color swatches. The PDF text records examples from `$2.34–$7.88`. |
| `E07` — Product | Gildan 3000 in White shows `$2.98` and a “Price Seen Elsewhere” comparison. **The PDF text says `$5.80`, while the embedded screenshot appears to show `$5.00`; recheck the original page before using either comparison figure.** |
| `E08` — Cart | The shirt is `$2.98`; the subtotal is `$3.47` because `$0.49` Shipping Protection is already selected. Shipping requires a State/ZIP lookup. |

**Interpretation:** The consistent catalog and technical product naming read as practical and modernist. Product codes and visible review counts provide comparison cues. The clear unit price is useful; the preselected protection fee and headline-versus-threshold shipping presentation are friction points.

## Jiffy — delivery and customization

Sources: [homepage](https://www.jiffy.com/), [Comfort Colors category](https://www.jiffy.com/brands/comfort-colors/t-shirts), [C1717 product page](https://www.jiffy.com/comfortcolors-C1717.html), and cart captured during the audit. See [E09–E12](./screenshots.md#jiffy).

| Evidence | Observation from the capture |
| --- | --- |
| `E09` — Homepage | Delivery information is localized to Butler, NJ `07405`; the page shows free shipping at `$59`, ratings, a time-limited `10%` offer on eligible products, and delivery-date cards. |
| `E10` — Category | Comfort Colors listings show product prices and policy/delivery information. |
| `E11` — Product | The report describes a C1717 size and color price matrix and a “Create Mockup” action. **The written report and embedded capture differ on review counts and some extended-size prices; inspect the original page before quoting those exact values.** |
| `E12` — Custom cart | A custom-printed C1717 is `$38.38`; Saturday Fast Delivery adds `$9.95`, producing a `$48.33` total. Tuesday Standard Delivery is shown as `$0.00`. |

**Interpretation:** The structured interface supports a Creator-oriented service. ZIP-specific delivery and size/color pricing help shoppers understand their options. The custom-print and rush-delivery example also shows why the final configuration and delivery choice must be clear.

## Cross-site synthesis

- **Reduce decision friction:** Structured grids, visible size prices, and location-specific delivery details make product comparisons easier.
- **Keep expression purposeful:** Humor and custom artwork can distinguish a brand without turning the shopping interface itself into a competing set of prompts.
- **Show the real cost:** Shipping thresholds, optional services, and custom/expedited charges should be clear before checkout.
- **Separate observation from interpretation:** Merchant labels such as “Most Loved,” “Save,” ratings, and delivery promises were recorded as displayed; they were not independently verified claims.

## Data items to recheck

The PDF is retained as the source record. Its text and embedded screenshots have mismatches that should be resolved against the original pages before these figures are reused:

1. **CheapesTees `E07`:** The written record says the comparison price is `$5.80`; the screenshot appears to display `$5.00`.
2. **Jiffy `E10–E11`:** The written record's review count and extended-size prices do not all match the embedded captures.
3. **Changing pages:** Prices, offers, availability, ratings, and delivery estimates may change after the November 2026 capture.

These are verification notes, not new findings about the merchants.
