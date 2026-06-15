import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jam06452.uk",
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["lucide-react"],
    },
  },
  integrations: [react(), sitemap()],
  output: "static",
})