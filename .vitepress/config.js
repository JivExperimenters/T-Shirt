import { defineConfig } from "vitepress";

export default defineConfig({
  title: "T-Shirt Site Research",
  description:
    "IS117-007 T-shirt competitive research, screenshot evidence, positioning hypotheses, and website specifications.",
  base: "/T-Shirt/",
  themeConfig: {
    outline: { level: 2, label: "On This Page" },
    nav: [
      { text: "Overview", link: "/" },
      { text: "Competitors", link: "/competitors" },
      { text: "Specifications", link: "/specifications" },
      { text: "Screenshots", link: "/screenshots" },
    ],
    sidebar: [
      {
        text: "Research",
        items: [
          { text: "Overview", link: "/" },
          { text: "Competitor comparison", link: "/competitors" },
          { text: "Website specifications", link: "/specifications" },
          { text: "Screenshot evidence", link: "/screenshots" },
          { text: "Method and limitations", link: "/methodology" },
          { text: "Peer feedback", link: "/peer-feedback" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/JivExperimenters/T-Shirt" },
    ],
  },
});
