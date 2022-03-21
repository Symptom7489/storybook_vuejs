<template>
  <section>
    <the-header/>
    <div class="flex flex-row">
      <the-sidebar/>
      <router-view></router-view>
    </div>
    <the-footer/>
  </section>
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
  margin-top: 0px;
  padding-top: 0px;
  background-size: cover;
  background-image: linear-gradient(to right, #d90404, rgba(190, 59, 41, 0.99));
}


</style>
