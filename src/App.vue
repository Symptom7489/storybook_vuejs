<template>
  <the-header/>
  <div class="flex flex-row">
    <the-sidebar/>
    <router-view></router-view>
  </div>
  <the-footer/>

</template>

<script>
import TheSidebar from "@/layout/TheSidebar";
import TheHeader from "@/layout/TheHeader";
import TheFooter from "@/layout/TheFooter";

export default {

  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
  }
}
</script>

<style>
body {
  background-color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
