<template>
  <button class="block my-4 lg:inline-block lg:mt-0 text-purple-800 hover:text-indigo-50 mr-4
bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "HeaderButton"
}
</script>

<style scoped>
.button {
  border-radius: 5px;

}
</style>