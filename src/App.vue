<template>
<the-header/>
  <div class="flex flex-row">
  <the-sidebar/>
  <the-carousel/>
  </div>
  <the-footer/>

</template>

<script>
  import TheCarousel from '@/components/layout/TheCarousel';
  import TheSidebar from "@/components/layout/TheSidebar";
  import TheHeader from "@/components/layout/TheHeader";
  import TheFooter from "@/components/layout/TheFooter";

export default {

  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    TheCarousel,
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
