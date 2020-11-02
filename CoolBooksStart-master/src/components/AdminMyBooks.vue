<template>
  <div class="hello">
    <table class="table">
      <caption>
        List of users
      </caption>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, idx) in allBooks" :key="idx">
          <th scope="row">{{ book.id }}</th>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
          <td>
            <button class="btn btn-info" @click="handleBtnEdit">Edit</button>
            <button class="btn btn-danger" @click="handleBtnDelete">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/books/";

export default {
  name: "AdminMyBooks",
  props: {
    msg: String,
  },
  data: () => ({
    allBooks: [],
  }),
  methods: {
    async fetchAllBooks() {
      let allBooks = await axios.get(API_ENDPOINT);
      let { data } = allBooks;
      this.allBooks = data;
    },
  },
  async created() {
    await this.fetchAllBooks();
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