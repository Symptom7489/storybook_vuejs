<template>
<div class="basis-2/12 border-4 border-blue-500">
  <ul>
    <li class="m-8" v-for="test in testList" :key="test">
      <sidebar-button
      :testList="testList">
        {{ test }}
      </sidebar-button>
    </li>
    </ul>
</div>
</template>

<script>
import SidebarButton from "@/components/SidebarButton";
export default {
  name: "TheSidebar",
  components: {
    SidebarButton
  },
  data() {
    return {
      testList: ['button A', 'button B', 'button C', 'button D'],
    };
}
}
</script>

<style scoped>

</style>