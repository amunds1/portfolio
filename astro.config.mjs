import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://amunds1.github.io",
  base: "/portfolio",
  integrations: [image()]
});