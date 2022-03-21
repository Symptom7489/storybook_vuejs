<template>

<li class="m-8 card">
    {{ title }}
    <br>
    {{ author }}
    <br>
  <router-link :to="selectedBook">
    <img :src="coverPage" :alt="title" class=" w-40">
  </router-link>

</li>

</template>

<script>
export default {
  name: "BaseCard",
  props: ['title', 'author', 'coverPage','id'],
  computed: {
    selectedBook() {
      return '/books/' + this.id;
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem 2rem;
  max-width: 40rem;
}
</style>