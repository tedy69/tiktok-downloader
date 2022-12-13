export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Tiktok Downloader - Download Video tiktok Without Watermark - SaveTik",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "Tiktok Downloader - Download Video tiktok Without Watermark - SaveTik",
      },
      {
        hid: "description",
        name: "description",
        content:
          "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.",
      },
      { hid: "og:locale", property: "og:locale", content: "en" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://tiktokvideodownloader.online/og-image.png",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "TikTok Video Downloader",
      },
      // Twitter
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      {
        hid: "twitter:size",
        name: "twitter:site",
        content: "TikTok Video Downloader",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "Download TikTok videos online with TikTok Video Downloader. Completely free.",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image:src",
        content: "https://tiktokvideodownloader.online/twitter-image.png",
      },
      // Apple
      {
        hid: "apple-mobile-web-app-capable",
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "TikTok Video Downloader",
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "TikTok Video Downloader",
      },
      {
        name: "robots",
        content: "index,follow",
      },
      {
        name: "language",
        content: "English",
      },
      {
        name: "googlebot",
        content: "index,follow",
      },
      {
        name: "Googlebot-Image",
        content: "follow, all",
      },
      {
        name: "msnbot",
        content: "follow, all",
      },
      {
        name: "alexabot",
        content: "follow, all",
      },
      {
        name: "Slurp",
        content: "follow, all",
      },
      {
        name: "ZyBorg",
        content: "follow, all",
      },
      {
        name: "Scooter",
        content: "follow, all",
      },
      {
        name: "MSSmartTagsPreventParsing",
        content: "true",
      },
      {
        name: "SPIDERS",
        content: "ALL",
      },
      {
        name: "WEBCRAWLERS",
        content: "ALL",
      },
      {
        name: "search engines",
        content:
          "aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/VueFlickity.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "nuxt-robots-module",
    "@nuxtjs/sitemap",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "SaveTik - TikTok Video Downloader",
      lang: "en",
      short_name: "SaveTik",
      description:
        "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4.",
      background_color: "#fff",
      theme_color: "#1f2937",
      start_url: "/",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
      },
    },
  },

  tailwindcss: {
    // Options
    darkMode: "class",
    mode: "jit",
  },

  purgeCSS: {
    whitelist: ["dark-mode"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },

  proxy: {
    "/": {
      target: "https://savetik.tedyfazrin.com",
      pathRewrite: { "^/": "" },
    },
  },

  robots: [
    {
      UserAgent: "*",
      Allow: "/",
    },
  ],

  sitemap: {
    hostname: "https://savetik.tedyfazrin.com",
  },
};
