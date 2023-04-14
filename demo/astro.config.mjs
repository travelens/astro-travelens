import UnoCSS from 'unocss/astro'
import alpine from '@astrojs/alpinejs'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://travelens.github.io',
  experimental: {
    assets: true
  },
  integrations: [alpine(), UnoCSS({
    injectReset: true
  })]
})