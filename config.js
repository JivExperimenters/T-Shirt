import { defineConfig } from "vitepress";

export default defineConfig({
  title: "T-Shirt Site Research & Plan",
  description:
    "IS117-007 T-shirt competitive research, store plan, user stories, SQLite checkout architecture, and website specifications.",
  base: "/T-Shirt/",
  rewrites: { "README.md": "index.md" },
  themeConfig: {
    outline: { level: 2, label: "On This Page" },
    nav: [
      { text: "Overview", link: "/" },
      { text: "Store Plan", link: "/plan" },
      { text: "Competitors", link: "/competitors" },
      { text: "Specifications", link: "/specifications" },
      { text: "Screenshots", link: "/screenshots" },
    ],
    sidebar: [
      {
        text: "Research & Plan",
        items: [
          { text: "Overview", link: "/" },
          { text: "Store plan & SQLite (Nov 17)", link: "/plan" },
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
