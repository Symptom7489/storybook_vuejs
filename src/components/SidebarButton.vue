<template>
  <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-20 h-20" >
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: "SidebarButton",
props: ['testList']
};
</script>

<style scoped>

</style>