import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType : 'autoUpdate',
      manifest : {
        name : 'react-pwa-app',
        short_name: 'ReactPWA',
        description: 'React App with PWA Feature',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/'
      },
      devOptions : {
        enabled: true
      }
    })
  ],
})
