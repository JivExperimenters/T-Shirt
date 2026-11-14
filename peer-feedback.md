# Peer feedback and decision log

Use GitHub Issues to document research and planning feedback and the decision made for each suggestion. Do not create fictitious issue numbers or claim that a reviewer has approved a change when a retry is still pending.

## Current research-round requirement

File **3–5 constructive GitHub issues per classmate, per project**. Each issue should include:

1. A specific observation, gap, or question.
2. Why it matters to the research or design decision.
3. A useful next step and a relevant page, source, or example.

## Decision history (Matched to GitHub Issues on `JivExperimenters/T-Shirt`)

All six issues in [JivExperimenters/T-Shirt/issues](https://github.com/JivExperimenters/T-Shirt/issues?q=is%3Aissue+state%3Aclosed) are recorded below with their exact GitHub status and explicit notes on where classmate reviewer retry (`@mnguyenht`) or follow-up validation is still pending:

| GitHub Issue & Author | Decision | Linked Change & Next Step | GitHub State & Reviewer Retry Status |
| --- | --- | --- | --- |
| **[#3 — Peer review request & open question: Fit slider vs. size chart](https://github.com/JivExperimenters/T-Shirt/issues/3)** (`@JivExperimenters`) | **Implement:** Ask peers to review whether the 3-bar fit/softness/durability summary and cart shipping calculator address `E03`, `E04`, and `E08`. | Carried into [`specifications.md`](./specifications.md) and User Stories `US-2` & `US-3` in [`plan.md`](./plan.md). | **Closed on GitHub;** 5-peer classroom walkthrough validation still **pending execution**. |
| **[#4 — Add validation test for Assumption 1](https://github.com/JivExperimenters/T-Shirt/issues/4)** (`@JivExperimenters`) | **Implement:** Record a concrete 5-peer check protocol for Assumption 1 (fit summary vs. static chart). | Documented the 5-peer check in [`README.md`](./README.md), [`specifications.md`](./specifications.md), and [`plan.md`](./plan.md). | **Closed on GitHub;** planned 5-peer check is **pending execution** (not yet an observed result). |
| **[#10 — Add Model Dimensions to Size picker](https://github.com/JivExperimenters/T-Shirt/issues/10)** (`@JivExperimenters`) | **Implement:** Label reviewer height and size ordered in fit feedback only when genuinely provided by the reviewer. | Added to Row 3 of [`specifications.md`](./specifications.md) and the SQLite `reviews` table in [`plan.md`](./plan.md). | **Closed on GitHub;** specification updated, peer walkthrough **pending**. |
| **[#12 — 1, crazy dog T-shirts are not postmodernism](https://github.com/JivExperimenters/T-Shirt/issues/12)** (`@mnguyenht`) | **Implement (Qualify interpretation):** The captured Crazy Dog site uses a familiar, relatively minimalist e-commerce layout; expressive graphics and humor are product-level cues, not proof that the overall site is postmodern. | Updated [`README.md`](./README.md), [`competitors.md`](./competitors.md), and [`plan.md`](./plan.md) (PRs `#8–#9`, commit `8d5270b`) to distinguish storefront layout from product artwork. | **Closed on GitHub;** wording updated in repo, **reviewer `@mnguyenht` retry/confirmation still pending**. |
| **[#13 — 2, most competitors might not sell to Maya](https://github.com/JivExperimenters/T-Shirt/issues/13)** (`@mnguyenht`) | **Implement (Add follow-up candidates):** Included [Threadless](https://www.threadless.com/) and [Redbubble](https://www.redbubble.com/) as follow-up artist-marketplace candidates for Maya without treating them as captured Nov 5 evidence. | Updated [`README.md`](./README.md), [`competitors.md`](./competitors.md), and Row 6 of [`specifications.md`](./specifications.md). | **Closed on GitHub;** follow-up scope documented, **Threadless/Redbubble audit and `@mnguyenht` retry still pending**. |
| **[#14 — 3, position B does full match Marcus yet](https://github.com/JivExperimenters/T-Shirt/issues/14)** (`@mnguyenht`) | **Implement (Redefine Position B):** Redefined Position B around bulk-shopping utility for Marcus (30+ shirt quantity tiers, size/color stock availability, and delivered value). | Updated Position B in [`README.md`](./README.md), [`competitors.md`](./competitors.md), and Row 5 of [`specifications.md`](./specifications.md). | **Closed on GitHub;** Position B clarified in repo, **30-shirt bulk validation test and `@mnguyenht` retry still pending**. |

## Outgoing Peer-Review Issues Filed on Partner Repo (`mnguyenht/is117-tshirt-research`)

1. **[Issue #1: Add Model Dimensions to Size picker](https://github.com/mnguyenht/is117-tshirt-research/issues/1)**
2. **[Issue #2: Highlight our clean, fee-free checkout](https://github.com/mnguyenht/is117-tshirt-research/issues/2)**
3. **[Issue #3: Keep and test the post modernist aesthethic](https://github.com/mnguyenht/is117-tshirt-research/issues/3)**

## Resolution workflow

For accepted feedback, show the full chain:

**Peer issue → decision → linked commit or pull request → verification → resolution**

- Reference the issue number in a related commit or pull request.
- Link the change in the issue and state how it was checked.
- Clearly note when a reviewer retry or follow-up check is still pending.
- Keep private reflections and personal eligibility circumstances in Canvas, not in this public repository.
