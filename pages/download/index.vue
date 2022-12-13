<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <NavBar />
    <div class="container mx-auto mt-20">
      <section class="section">
        <div>
          <h1
            class="
              title
              text-2xl
              lg:text-5xl
              font-black
              text-center
              dark:text-gray-100
            "
          >
            Your TikTok video is ready for download!
          </h1>
          <div class="flex items-center justify-between">
            <a
              href="#"
              class="
                my-8
                flex flex-col
                items-center
                bg-white
                border
                rounded-lg
                shadow-md
                md:flex-row md:max-w-xl
                hover:bg-gray-600
                dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700
              "
            >
              <img
                class="
                  object-cover
                  w-full
                  rounded-t-lg
                  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg
                "
                :src="video.cover"
                :alt="video.description"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5
                  class="
                    mb-2
                    text-lg
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-gray-200
                  "
                >
                  {{ video.description }}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {{ video.author }}
                </p>
              </div>
            </a>

            <div class="flex flex-col w-3/12">
              <div class="hidden lg:block sm:hidden">
                <button
                  @click="downloadVideoWatermark"
                  type="button"
                  class="
                    text-white
                    bg-[#1da1f2]
                    hover:bg-[#1da1f2]/90
                    focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
                    font-medium
                    rounded-lg
                    text-sm
                    w-full
                    px-5
                    py-4
                    text-center
                    items-center
                    dark:focus:ring-[#1da1f2]/55
                    mb-2
                  "
                >
                  Download
                </button>
              </div>
              <div class="hidden lg:block sm:hidden">
                <button
                  @click="downloadVideo"
                  type="button"
                  class="
                    text-white
                    bg-[#15a13f]
                    hover:bg-[#15a13f]/90
                    focus:ring-4 focus:outline-none focus:ring-[#15a13f]/50
                    font-medium
                    rounded-lg
                    text-sm
                    w-full
                    px-5
                    py-4
                    text-center
                    items-center
                    dark:focus:ring-[#15a13f]/55
                    mb-2
                  "
                >
                  Download Without Watermark
                </button>
              </div>
              <div class="hidden lg:block sm:hidden">
                <button
                  @click="downloadMusic"
                  type="button"
                  class="
                    text-white
                    bg-[#ff9800]
                    hover:bg-[#ff9800]/90
                    focus:ring-4 focus:outline-none focus:ring-[#ff9800]/50
                    font-medium
                    rounded-lg
                    text-sm
                    w-full
                    px-5
                    py-4
                    text-center
                    items-center
                    dark:focus:ring-[#ff9800]/55
                    mb-2
                  "
                >
                  Download Music
                </button>
              </div>
            </div>
          </div>

          <div class="block lg:flex items-center">
            <div class="w-full lg:w-2/12 sm:w-full block lg:hidden sm:block">
              <button
                @click="downloadVideo"
                type="button"
                class="
                  text-white
                  bg-[#1da1f2]
                  hover:bg-[#1da1f2]/90
                  focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
                  font-medium
                  rounded-lg
                  text-sm
                  w-full
                  px-5
                  py-4
                  text-center
                  items-center
                  dark:focus:ring-[#1da1f2]/55
                  mb-2
                "
              >
                Download Without Watermark
              </button>
            </div>
            <div class="w-full lg:w-2/12 sm:w-full block lg:hidden sm:block">
              <button
                @click="downloadVideoWatermark"
                type="button"
                class="
                  text-white
                  bg-[#15a13f]
                  hover:bg-[#15a13f]/90
                  focus:ring-4 focus:outline-none focus:ring-[#15a13f]/50
                  font-medium
                  rounded-lg
                  text-sm
                  w-full
                  px-5
                  py-4
                  text-center
                  items-center
                  dark:focus:ring-[#15a13f]/55
                  mb-2
                "
              >
                Download With Watermark
              </button>
            </div>
            <div class="w-full lg:w-2/12 sm:w-full block lg:hidden sm:block">
              <button
                @click="downloadMusic"
                type="button"
                class="
                  text-white
                  bg-[#ff9800]
                  hover:bg-[#ff9800]/90
                  focus:ring-4 focus:outline-none focus:ring-[#ff9800]/50
                  font-medium
                  rounded-lg
                  text-sm
                  w-full
                  px-5
                  py-4
                  text-center
                  items-center
                  dark:focus:ring-[#ff9800]/55
                  mb-2
                "
              >
                Download With Watermark
              </button>
            </div>
            <div class="w-full lg:w-2/12 sm:w-full">
              <button
                type="button"
                @click="$router.push('/')"
                class="
                  text-white
                  bg-[#49495a]
                  hover:bg-[#49495a]/90
                  focus:ring-4 focus:outline-none focus:ring-[#49495a]/50
                  font-medium
                  rounded-lg
                  text-sm
                  w-full
                  px-5
                  py-4
                  inline-flex
                  text-center
                  items-center
                  justify-center
                  dark:focus:ring-[#49495a]/55
                "
              >
                <svg
                  width="20"
                  height="21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M14.708 6.286A6.631 6.631 0 0 0 10 4.328a6.658 6.658 0 0 0-6.658 6.666A6.658 6.658 0 0 0 10 17.661c3.108 0 5.7-2.125 6.442-5h-1.734A4.992 4.992 0 0 1 10 15.994c-2.758 0-5-2.241-5-5 0-2.758 2.242-5 5-5a4.93 4.93 0 0 1 3.517 1.484l-2.684 2.683h5.834V4.328l-1.959 1.958Z"
                      fill="#fff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(0 .994)"
                        d="M0 0h20v20H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                Download other video
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: "hasVideo",
  head: {
    title: "Download ready | TikTok Video Downloader",
    meta: [
      {
        hid: "og:title",
        property: "og:title",
        content: "Download ready | TikTok Video Downloader",
      },
    ],
  },
  computed: {
    video() {
      return this.$store.state.video;
    },
  },
  methods: {
    downloadVideo() {
      location.href = `/api/download?url=${this.$store.state.url}&watermark=false&music=false`;
    },
    downloadVideoWatermark() {
      location.href = `/api/download?url=${this.$store.state.url}&watermark=true&music=false`;
    },
    downloadMusic() {
      location.href = `/api/download?url=${this.$store.state.url}&watermark=false&music=true`;
    },
  },
};
</script>

<style>
</style>