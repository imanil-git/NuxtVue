// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      script:[

      ],
      link:[
        {
          href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
          rel:"stylesheet",
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})
