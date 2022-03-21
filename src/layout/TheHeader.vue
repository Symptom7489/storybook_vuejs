<template>
  <!--  Navigation Bar -->
  <nav class="bg-gradient-to-l from-red-400 to-red-600 pt-8 flex items-center justify-between">
    <div class="flex items-center flex-shrink-0 text-purple-800 mr-6">

      <!--      Image for site here - use instead of text-->
      <header-button>
        <router-link to="/books">StoryBook App</router-link>
      </header-button>
    </div>
    <div class="block lg:hidden">
      <button
          class="flex items-center px-3 py-2 border rounded text-purple-800-200 border-purple-400 hover:text-indigo-50 hover:border-purple-400 hover:bg-purple-600">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-start">
      <input type="search"
             class="inline-block relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-purple-900 focus:font-smeibold focus:bg-indigo-50 focus:border-purple-800 focus:outline-none"
             placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
      <button @click="test"
              class="btn inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>

    <!--    Hide Sign Up / Login after user is logged in.  Will replace with Logout-->
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
      <div>
        <header-button>
          <router-link to="/register">Sign Up</router-link>
        </header-button>
        <header-button>
          <router-link to="/login">Login Here</router-link>
        </header-button>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderButton from "@/components/HeaderButton";

export default {
  name: "TheHeader",
  components: {
    HeaderButton,
  },
  methods: {
    // on-click event for search button
    test() {
      console.log('testing');
    }
  }
}
</script>

<style scoped>


</style>