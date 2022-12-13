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
            Your TikTok photo is ready for download!
          </h1>
          <div class="flex items-center justify-center">
            <div class="carousel relative shadow-2xl my-6">
              <Flickity ref="flickity" :options="flickityOptions">
                <div
                  class="carousel-cell"
                  v-for="(i, index) in photo.image"
                  :key="'photo-' + index"
                >
                  <img class="w-full" :src="i" :alt="photo.description" />
                </div>
              </Flickity>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="hidden lg:block sm:hidden w-3/12 mx-auto">
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
                Download
              </button>
            </div>

            <div class="hidden lg:block sm:hidden w-3/12 mx-auto">
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
                  mb-2
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
                Download other photo
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
  middleware: "hasPhoto",
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
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        autoplay: 3000,
        imagesLoaded: true,
      },
    };
  },
  computed: {
    photo() {
      return this.$store.state.photo;
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.flickity.resize();
    }, 500);
  },
  methods: {
    downloadVideo() {
      location.href = `/api/download?url=${this.$store.state.url}&watermark=false`;
    },
    downloadVideoWatermark() {
      location.href = `/api/download?url=${this.$store.state.url}&watermark=true`;
    },
  },
};
</script>

<style>
.carousel {
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  @media screen and (min-width: 640px) {
    width: 30%;
  }
  height: 100%;
  overflow: hidden;
}

.carousel .carousel-cell {
  overflow: hidden;
}

.carousel .carousel-cell img {
  display: block;
}

.carousel .flickity-page-dots {
  bottom: 30px;
}
.carousel .flickity-page-dots .dot {
  width: 10px;
  height: 4px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.5);
  border: 0 solid white;
  border-radius: 0;
}
.carousel .flickity-page-dots .dot.is-selected {
  background: #ff0000;
  border: 0 solid #ff0000;
}
</style>