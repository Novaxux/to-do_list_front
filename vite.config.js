import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        id: "/",
        name: "My Todo List PWA",
        short_name: "MiPWA",
        description: "A proggressive web app to manage your tasks",
        start_url: "/",
        display: "standalone",
        scope: "/",
        background_color: "#f2b6b6ff",
        theme_color: "#fff599ff",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/list/192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/list/512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          ,
          {
            src: "/icons/list/72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
