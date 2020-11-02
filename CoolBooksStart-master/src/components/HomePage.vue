<template>
  <div>
  <section class="welcome p-t-10">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="title-4"> Mes livres
          </h1>
        </div>
      </div>
    </div>
  </section>
    <section>

      <div class="row">
        <div v-for="(book,idx) in allBooks.data" :key="idx" class="card col-8">
          <div class="media mt-2">
            <img :src="book.coverUri" class="mr-3" alt="">
            <div class="media-body">
              <h5 class="mt-0"> {{book.title}}</h5>
              <h6> {{book.author}}</h6>
              <p> {{ book.year}}</p>
              <button type="button" class="btn btn-info btn-sm" @click="getOneBook(book.id)" >Detail </button>
            </div>
          </div>
        </div>

      </div>


    </section>

  </div>
</template>

<script>
import axios from "axios";
const BOOKS_API ='http://localhost:3000/books';
export default {
  name: 'HomePage',
  props: {
  },
  data:()=>({
    allBooks: {}
  }),
  methods: {
    async getAllBooks() {
      this.allBooks = await axios.get(BOOKS_API);
      return this.allBooks.data;
    },
    getOneBook(bookId) {
      this.$router.push({ name:'OneBook', params:{bookId} })
    }
  },
  created() {
    this.getAllBooks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
