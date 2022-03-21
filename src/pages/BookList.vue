<template>
  <section class="m-auto">
    <p class="m-auto text-center">A LIST OF ALL BOOKS!</p>
    <ul class="grid grid-cols-3 m-auto">
      <li class="m-8" v-for="book in bookList" :key="book"> <base-card>
        {{ book }}
      </base-card>  </li>
    </ul>
  </section>

</template>

<script>
export default {
  name: "BookList",
  components: {},

  data() {
    return {
      bookList: ['book1', 'book2','book3',
          'book4','book5','Really long name of book6'
      ],
    };
    },
}
</script>

<style scoped>

</style>