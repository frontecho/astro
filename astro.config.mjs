import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://steady-praline-2ae649.netlify.app",
  integrations: [preact()]
});