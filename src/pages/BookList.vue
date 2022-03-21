<template>
  <section class="m-auto">
    <p class="m-auto text-center">A LIST OF ALL BOOKS!</p>
    <ul class="grid grid-cols-3 m-auto">

        <book-card
            v-for="book in books"
            :key="book.id"
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :coverPage="book.coverPage"
        >
        </book-card>

    </ul>
  </section>

</template>

<script>
import BookCard from '@/components/books/BookCard'
export default {
  name: "BookList",
  components: {BookCard},

  computed: {
    books() {
      return this.$store.getters['books/getBookList'];
    }
  },
  // methods: {
  //   async loadBooksList() {
  //     await this.$store.dispatch('books/loadBooks');
  //   }
  // },
  // created() {
  //   this.loadBooksList();
  //   console.log('created');
  // },
}
</script>

<style scoped>

</style>