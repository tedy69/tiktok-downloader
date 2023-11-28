<template>
  <div class="flex flex-col">
    <!-- Page Scroll Progress -->
    <div
      class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
      :style="`width: ${percent}%`"
    ></div>

    <!-- Navbar -->
    <nav
      class="flex justify-between px-2 sm:px-4 py-4 bg-white dark:bg-gray-900 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"
    >
      <!-- Logo Container -->
      <div class="flex items-center">
        <!-- Logo -->
        <a class="cursor-pointer" @click="$router.push('/')">
          <h3 class="text-2xl font-medium flex items-center">
            <img
              class="h-10 object-cover"
              src="https://savetik.tedyfazrin.com/logo.png"
              alt="Savetik Logo"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >SaveTik</span
            >
          </h3>
        </a>
      </div>

      <!-- Icon Menu Section -->
      <div class="flex items-center space-x-5">
        <button
          @click="changeMode"
          id="theme-toggle"
          data-tooltip-target="tooltip-toggle"
          type="button"
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            aria-hidden="true"
            id="theme-toggle-dark-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            id="theme-toggle-light-icon"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Toggle dark mode</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      percent: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop,
        height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

      this.percent = Math.round((winScroll / height) * 100);
    });
  },
  methods: {
    changeMode() {
      // this.SET_DARK(!this.dark);
      // localStorage.theme = this.dark ? "dark" : "light";
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
  },
};
</script>

<style></style>
