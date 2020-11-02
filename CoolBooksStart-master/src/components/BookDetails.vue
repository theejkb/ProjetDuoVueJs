<template>
  <div>
    <div class="welcome container p-t-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="title-4"> {{selectedBook.title}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="selectedBook.coverUri" alt="Card image cap">
          </div>
        </div>
        <div class="col-sm-8">
          <div class="card" style="width:auto;">
            <div class="card-body">
              <a href="#" class="card-link">{{ selectedBook.title}}</a>
              <a href="#" class="card-link">{{ selectedBook.author}}</a>
              <a href="#" class="card-link">{{ selectedBook.year}}</a>
              <button type="button" class="btn btn-danger">eBook</button>
              <p class="card-text">{{selectedBook.resume}}</p>

            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
const  BOOKS_API_ENDPOINT ='http://localhost:3000/books/';
export default {
  name: 'BookDetails',
  components: {

  },
  data:()=>({
    selectedBook: {}
  }),
  methods: {
    async getOneBook(bookId) {
      let oneBook = await axios.get(`${BOOKS_API_ENDPOINT}${bookId}`);
      this.selectedBook = oneBook.data;
      return this.selectedBook;
    },
  },
 async created() {
   const {bookId}     = this.$route.params;
   await this.getOneBook(bookId);
  }
}
</script>