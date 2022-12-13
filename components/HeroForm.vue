<template>
  <section class="section">
    <form class="lg:flex sm:block justify-center">
      <label
        for="video-url"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >TikTok video URL</label
      >
      <div class="relative w-full lg:w-1/2 mr-2">
        <div
          class="
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-3
            pointer-events-none
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.317 3.0441C13.598 1.76308 15.675 1.76308 16.956 3.0441C18.237 4.32511 18.237 6.40205 16.956 7.68306L13.9331 10.7059C12.6521 11.9869 10.5752 11.9869 9.29416 10.7059C9.19999 10.6117 9.11291 10.5135 9.03283 10.4118C8.81933 10.1405 8.42638 10.0937 8.15515 10.3072C7.88392 10.5207 7.83713 10.9137 8.05063 11.1849C8.1612 11.3254 8.2811 11.4606 8.41028 11.5898C10.1794 13.359 13.0478 13.359 14.817 11.5898L17.8399 8.56694C19.609 6.79777 19.609 3.92938 17.8399 2.16021C16.0707 0.391044 13.2023 0.391043 11.4331 2.16021L8.93309 4.66024C8.68902 4.90432 8.68902 5.30005 8.93309 5.54413C9.17717 5.78821 9.5729 5.78821 9.81698 5.54413L12.317 3.0441Z"
              fill="#C6C6D5"
            ></path>
            <path
              d="M6.06698 9.2941C7.348 8.01308 9.42493 8.01308 10.7059 9.2941C10.8002 9.38831 10.8872 9.48655 10.9673 9.58821C11.1808 9.85944 11.5737 9.90623 11.845 9.69272C12.1162 9.47922 12.163 9.08627 11.9495 8.81504C11.8389 8.67454 11.7189 8.53933 11.5898 8.41021C9.82066 6.64104 6.95227 6.64104 5.1831 8.41021L2.16025 11.4331C0.391082 13.2022 0.391082 16.0706 2.16025 17.8398C3.92942 19.609 6.79781 19.609 8.56698 17.8398L11.067 15.3398C11.3111 15.0957 11.3111 14.7 11.067 14.4559C10.8229 14.2118 10.4272 14.2118 10.1831 14.4559L7.6831 16.9559C6.40208 18.2369 4.32515 18.2369 3.04413 16.9559C1.76312 15.6749 1.76312 13.598 3.04413 12.3169L6.06698 9.2941Z"
              fill="#C6C6D5"
            ></path>
            <path
              d="M12.317 3.0441C13.598 1.76308 15.675 1.76308 16.956 3.0441C18.237 4.32511 18.237 6.40205 16.956 7.68306L13.9331 10.7059C12.6521 11.9869 10.5752 11.9869 9.29416 10.7059C9.19999 10.6117 9.11291 10.5135 9.03283 10.4118C8.81933 10.1405 8.42638 10.0937 8.15515 10.3072C7.88392 10.5207 7.83713 10.9137 8.05063 11.1849C8.1612 11.3254 8.2811 11.4606 8.41028 11.5898C10.1794 13.359 13.0478 13.359 14.817 11.5898L17.8399 8.56694C19.609 6.79777 19.609 3.92938 17.8399 2.16021C16.0707 0.391044 13.2023 0.391043 11.4331 2.16021L8.93309 4.66024C8.68902 4.90432 8.68902 5.30005 8.93309 5.54413C9.17717 5.78821 9.5729 5.78821 9.81698 5.54413L12.317 3.0441Z"
              stroke="#C6C6D5"
              stroke-width="0.6"
              stroke-linecap="round"
            ></path>
            <path
              d="M6.06698 9.2941C7.348 8.01308 9.42493 8.01308 10.7059 9.2941C10.8002 9.38831 10.8872 9.48655 10.9673 9.58821C11.1808 9.85944 11.5737 9.90623 11.845 9.69272C12.1162 9.47922 12.163 9.08627 11.9495 8.81504C11.8389 8.67454 11.7189 8.53933 11.5898 8.41021C9.82066 6.64104 6.95227 6.64104 5.1831 8.41021L2.16025 11.4331C0.391082 13.2022 0.391082 16.0706 2.16025 17.8398C3.92942 19.609 6.79781 19.609 8.56698 17.8398L11.067 15.3398C11.3111 15.0957 11.3111 14.7 11.067 14.4559C10.8229 14.2118 10.4272 14.2118 10.1831 14.4559L7.6831 16.9559C6.40208 18.2369 4.32515 18.2369 3.04413 16.9559C1.76312 15.6749 1.76312 13.598 3.04413 12.3169L6.06698 9.2941Z"
              stroke="#C6C6D5"
              stroke-width="0.6"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <input
          type="URL"
          id="video-url"
          class="
            block
            w-full
            p-4
            pl-10
            text-sm text-gray-900
            border border-gray-300
            rounded-lg
            bg-gray-50
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="TikTok video URL"
          v-model="videoUrl"
        />
        <button
          @click="onPaste"
          type="button"
          class="
            text-white
            absolute
            right-2.5
            bottom-2.5
            bg-blue-400
            hover:bg-gray-100
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-4
            py-2
            dark:bg-blue-400 dark:hover:bg-gray-100 dark:focus:ring-gray-100
            flex
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.5 1.5H11.1434C11.0932 1.49995 11.0442 1.48478 11.0027 1.45646C10.9612 1.42815 10.9293 1.388 10.9109 1.34125C10.8149 1.09371 10.6463 0.880946 10.4273 0.730837C10.2082 0.580728 9.94897 0.50027 9.68344 0.5H6.31656C6.05103 0.50027 5.79177 0.580728 5.57274 0.730837C5.35371 0.880946 5.18513 1.09371 5.08906 1.34125C5.07073 1.388 5.03875 1.42815 4.99728 1.45646C4.95581 1.48478 4.90678 1.49995 4.85656 1.5H4.5C3.96957 1.5 3.46086 1.71071 3.08579 2.08579C2.71071 2.46086 2.5 2.96957 2.5 3.5V13.5C2.5 14.0304 2.71071 14.5391 3.08579 14.9142C3.46086 15.2893 3.96957 15.5 4.5 15.5H11.5C12.0304 15.5 12.5391 15.2893 12.9142 14.9142C13.2893 14.5391 13.5 14.0304 13.5 13.5V3.5C13.5 2.96957 13.2893 2.46086 12.9142 2.08579C12.5391 1.71071 12.0304 1.5 11.5 1.5ZM9.99594 3.5H6.00406C5.87145 3.5 5.74428 3.44732 5.65051 3.35355C5.55674 3.25979 5.50406 3.13261 5.50406 3C5.50406 2.86739 5.55674 2.74021 5.65051 2.64645C5.74428 2.55268 5.87145 2.5 6.00406 2.5H9.99594C10.1285 2.5 10.2557 2.55268 10.3495 2.64645C10.4433 2.74021 10.4959 2.86739 10.4959 3C10.4959 3.13261 10.4433 3.25979 10.3495 3.35355C10.2557 3.44732 10.1285 3.5 9.99594 3.5Z"
              fill="#0423EE"
            />
          </svg>
          <span class="text-blue-700">Paste</span>
        </button>
      </div>
      <div class="flex lg:hidden sm:flex items-center mt-4">
        <input
          id="checked-checkbox"
          type="checkbox"
          v-model="isPhoto"
          class="
            w-4
            h-4
            text-blue-600
            bg-gray-100
            rounded
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Tiktok Photo URL
        </label>
      </div>
      <button
        v-if="!isLoading"
        @click="onSubmit"
        type="button"
        class="
          w-full
          lg:w-1/12
          sm:w-full
          px-4
          py-3
          bg-blue-600
          rounded-md
          text-white
          outline-none
          shadow-lg
          mt-4
          lg:m-0
          disabled:bg-blue-300
        "
      >
        <span>Download</span>
      </button>
      <button
        v-if="isLoading"
        disabled
        type="button"
        class="
          w-full
          lg:w-1/12
          sm:w-full
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          text-center
          mt-4
          lg:m-0
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          items-center
        "
      >
        <svg
          role="status"
          class="inline mr-3 w-4 h-4 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    </form>
    <div class="hidden lg:flex sm:hidden items-center mt-4 pl-[17rem]">
      <input
        id="checked-checkbox"
        type="checkbox"
        v-model="isPhoto"
        class="
          w-4
          h-4
          text-blue-600
          bg-gray-100
          rounded
          border-gray-300
          focus:ring-blue-500
          dark:focus:ring-blue-600 dark:ring-offset-gray-800
          focus:ring-2
          dark:bg-gray-700 dark:border-gray-600
        "
      />
      <label
        for="checked-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Tiktok Photo URL
      </label>
    </div>
    <div
      v-if="showModal"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="bg-white rounded-lg">
        <div class="w-96 border-t-8 border-pink-600 rounded-lg flex">
          <div class="w-1/3 pt-6 flex justify-center">
            <svg
              class="w-16 h-16 bg-pink-600 text-white p-3 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              width="478.125px"
              height="478.125px"
              viewBox="0 0 478.125 478.125"
              xml:space="preserve"
            >
              <circle
                cx="239.904"
                cy="314.721"
                r="35.878"
                fill="currentColor"
              />
              <path
                fill="currentColor"
                d="M256.657,127.525h-31.9c-10.557,0-19.125,8.645-19.125,19.125v101.975c0,10.48,8.645,19.125,19.125,19.125h31.9     c10.48,0,19.125-8.645,19.125-19.125V146.65C275.782,136.17,267.138,127.525,256.657,127.525z"
              />
              <path
                fill="currentColor"
                d="M239.062,0C106.947,0,0,106.947,0,239.062s106.947,239.062,239.062,239.062c132.115,0,239.062-106.947,239.062-239.062     S371.178,0,239.062,0z M239.292,409.734c-94.171,0-170.595-76.348-170.595-170.596c0-94.248,76.347-170.595,170.595-170.595     s170.595,76.347,170.595,170.595C409.887,333.387,333.464,409.734,239.292,409.734z"
              />
            </svg>
          </div>
          <div class="w-full pt-9 pr-4">
            <h3 class="font-bold text-pink-700">Oops Something went wrong</h3>
            <p class="py-4 text-sm text-gray-400">
              {{ message }}
            </p>
          </div>
        </div>

        <div class="p-4 flex flex-row-reverse space-x-4">
          <button
            @click="showModal = false"
            class="
              w-1/2
              px-4
              py-3
              text-center text-pink-100
              bg-pink-600
              rounded-lg
              hover:bg-pink-700 hover:text-white
              font-bold
              text-sm
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </section>
</template>

<script>
export default {
  head: {
    __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "SaveTik",
            "url": "https://savetik.tedyfazrin.com",
            "description": "TikTok Video Downloader is a completely free online option to download TikTok videos and save them as mp4."
          }`,
        type: "application/ld+json",
      },
    ],
  },
  data() {
    return {
      isLoading: false,
      videoUrl: "",
      isPhoto: false,
      showModal: false,
    };
  },
  computed: {
    isValid() {
      return this.videoUrl !== "";
    },
    message() {
      return this.$store.state.errorMessage;
    },
  },
  methods: {
    onPaste() {
      navigator.clipboard.readText().then(
        (cliptext) => (this.videoUrl = cliptext),
        (err) => console.log(err)
      );
    },
    async onSubmit(e) {
      e.preventDefault();
      if (!this.videoUrl) {
        this.$store.commit("SET_ERROR", "Please enter a video URL");
        this.showModal = true;
        return;
      }
      if (!this.isTikTokVideo(this.videoUrl)) {
        this.$store.commit("SET_ERROR", "The given video URL is not valid");
        this.showModal = true;
        return;
      }
      this.isLoading = true;
      if (this.isPhoto) {
        await this.$store
          .dispatch("getPhoto", this.videoUrl)
          .then(() => {
            this.$router.push({ path: "/download-photo" });
          })
          .catch((err) => {
            this.$store.commit("SET_ERROR", err.response.data.message);
            this.showModal = true;
          });
      } else {
        await this.$store
          .dispatch("getData", this.videoUrl)
          .then(() => {
            this.$router.push({ path: "/download" });
          })
          .catch((err) => {
            this.$store.commit("SET_ERROR", err.response.data.message);
            this.showModal = true;
          });
      }
      this.$store.commit("SET_URL", this.videoUrl);
      this.isLoading = false;
    },
    isTikTokVideo(url) {
      return url.includes("tiktok");
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
</style>