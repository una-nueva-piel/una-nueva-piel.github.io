import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  site: "https://carpiano.github.io",
  base: "/mano-bionica-2",
  integrations: [tailwind(), alpinejs()],
});
