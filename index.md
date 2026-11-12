---
layout: home
---

# T-Shirt Site Research

## IS117-007 · Competitive research · November 2026

<script setup>
import { withBase } from 'vitepress'

const features = [
  {
    title: 'Three distinct competitors',
    details: 'Compare novelty graphics, wholesale blanks, and custom apparel across the same shopper journey.',
    link: withBase('/competitors'),
  },
  {
    title: 'Evidence you can inspect',
    details: 'Twelve dated screenshots document homepage, category, product, and cart observations.',
    link: withBase('/screenshots'),
  },
  {
    title: 'Research method',
    details: 'See the scope, sources, evidence limits, and open verification questions.',
    link: withBase('/methodology'),
  },
]
</script>

<div class="research-intro">
  <p><strong>Research question:</strong> How do online T-shirt retailers explain value, organize their shopping experience, and reduce cost or fit uncertainty for a first-time desktop shopper?</p>
  <p><strong>Scenario:</strong> A US shopper near Butler, New Jersey (ZIP 07405) selects one short-sleeve crewneck in Small or Medium and proceeds to the cart.</p>
</div>

<div class="vp-doc">
  <h2>At a glance</h2>
  <p>The audit compares Crazy Dog T-Shirts, CheapesTees, and Jiffy. Together, they show the tradeoffs between expressive product storytelling, low-price catalog clarity, and delivery/customization information.</p>
  <div class="research-cards">
    <a v-for="feature in features" :key="feature.title" class="research-card" :href="feature.link">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
      <span>Explore →</span>
    </a>
  </div>
</div>

## Main takeaway

Use a **clear, low-distraction shopping interface** for product, size, price, and delivery information; bring personality through the graphic collections and copy. Do not hide costs or preselect add-ons.

## Research record

- [Read the competitor comparison](/competitors)
- [View evidence E01–E12](/screenshots)
- [See website specifications and checks](/specifications)
- [Read the method and limitations](/methodology)
- [Open the peer-feedback log](/peer-feedback)
- [Download the full report (PDF)](https://raw.githubusercontent.com/JivExperimenters/T-Shirt/main/IS117_TShirt_Competitive_Research_Report_Jivitesh_Duddu.docx.pdf)
