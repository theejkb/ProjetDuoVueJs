<template>
  <div>
    <section class="welcome p-t-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="title-4"> Mes Genres
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>

      <div class="row">
        <div v-for="(genre,idx) in allGenres.data" :key="idx" class="card col-8">
          <div class="media mt-2">
            <div class="media-body">
              <h5 class="mt-0"> {{genre.label}}:  livres de ce genre </h5>

            </div>
          </div>
        </div>

      </div>

    </section>

  </div>
</template>

<script>
import axios from "axios";
const Genres_API ='http://localhost:3000/genres';
const BOOKS_API ='http://localhost:3000/books';
export default {
  name: 'GenrePage',
  props: {
  },
  data:()=>({
    allGenres: {},
    allBooks: {},
    number: 0
  }),
  methods: {
    async getAllGenres() {
      this.allGenres = await axios.get(Genres_API);
    },
    async getNumberBooks() {
      this.allBooks = await axios.get(BOOKS_API);

     this.number = this.allGenres.data.filter(function (elem){
        if (this.allBooks.data.genre.id === this.allGenres.data.id){
          return elem += 1;
        }
      })
      console.log(this.number,"number");


    },
  },
  created() {
    this.getAllGenres();
    this.getNumberBooks();
  },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
