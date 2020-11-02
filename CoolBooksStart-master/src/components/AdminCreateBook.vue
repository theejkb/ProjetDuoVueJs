<template>
  <div class="hello">
    <div class="container-fluide p-5">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Titre du livre</label>
          <input
            v-model="newBook.title"
            type="string"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Titre du livre"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Auteur</label>
          <input
            v-model="newBook.author"
            type="string"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Auteur"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Année</label>
          <input
            v-model="newBook.year"
            type="string"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Titre du livre"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Résumé</label>
          <textarea
            v-model="newBook.resume"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Genre</label>
          <select
            v-model="newBook.genre.id"
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option v-for="bookGenre in genres" :key="bookGenre.id">
              {{ bookGenre.label }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Couverture du livre (lien)</label>
          <input
            v-model="newBook.coverUri"
            type="string"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="https://www.liens-vers-mon-image.fr"
          />
        </div>
        <div class="form-check">
          <input
            v-model="newBook.ebooks"
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Disponible en eBooks</label
          >
        </div>
        <button type="submit" class="btn btn-primary" @click="updateBook()">
          {{ this.onEditMode ? "Update" : "Create" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/books/";
const API_ENDPOINT_GENRE = "http://localhost:3000/genres/";

export default {
  name: "AdminCreateBook",
  props: {
    msg: String,
  },
  data: () => ({
    newBook: {},
    genres: {},
    onEditMode: false,
  }),
  methods: {
    async fetchOneBook(bookId) {
      let oneBook = await axios.get(`${API_ENDPOINT}${bookId}`);
      let { data } = oneBook;
      this.newBook = data;
    },

    async fetchGenres() {
      let allGenre = await axios.get(API_ENDPOINT_GENRE);
      let { data } = allGenre;
      this.genres = data;
    },

    async updateBook() {
      let body = {
        title: this.newBook.title,
        author: this.newBook.author,
        resume: this.newBook.resume,
        coverUri: this.newBook.coverUri,
        year: this.newBook.year,
        ebooks: this.newBook.ebooks,
        genre: {
          id: this.newBook.genre.id,
        },
      };
      let tryToUpdate = await axios.patch(
        `${API_ENDPOINT}${this.newBook.id}`,
        body
      );
      console.log(tryToUpdate);
      this.$router.push({ name: "AdminMyBooks" });
      return tryToUpdate;
    },

    async createBook() {
      let body = {
        title: this.newBook.title,
        author: this.newBook.author,
        resume: this.newBook.resume,
        coverUri: this.newBook.coverUri,
        year: this.newBook.year,
        ebooks: this.newBook.ebooks,
        genre: {
          id: this.newBook.genre.id,
        },
      };
      let tryToUpdate = await axios.patch(
        `${API_ENDPOINT}${this.newBook.id}`,
        body
      );
      console.log(tryToUpdate);
      this.$router.push({ name: "AdminMyBooks" });
      return tryToUpdate;
    },

    async deleteBook() {
      let body = {
        title: this.newBook.title,
        author: this.newBook.author,
        resume: this.newBook.resume,
        coverUri: this.newBook.coverUri,
        year: this.newBook.year,
        ebooks: this.newBook.ebooks,
        genre: {
          id: this.newBook.genre.id,
        },
      };
      let tryToUpdate = await axios.delete(
        `${API_ENDPOINT}${this.newBook.id}`,
        body
      );
      console.log(tryToUpdate);
      this.$router.push({ name: "AdminMyBooks" });
      return tryToUpdate;
    },
  },

  async created() {
    const { bookId = false } = this.$route.params;
    this.fetchGenres();
    if (bookId) {
      this.onEditMode = true;
      await this.fetchOneBook(bookId);
      console.log("EN EDITION");
    } else {
      this.onEditMode = false;
      console.log("EN CREATION");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>