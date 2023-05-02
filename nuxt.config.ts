// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/app.scss"],
    vite: {
        define: {
          'process.env.DEBUG': true,
        },
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `
                @use "@/assets/css/mixins.scss" as *;
              `,
            }
          }
        },
    },
})
