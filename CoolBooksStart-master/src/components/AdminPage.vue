<template>
  <div class="admin">
    <div class="container-fluid p-5">
      <h1>ADMIN</h1>
      <div class="card" style="width: 18rem">
        <div class="card-header">Books</div>
        <ul class="list-group list-group-flush">
          <a @click="handleBtnAdd()">
            <li class="list-group-item"><i class="fas fa-plus"></i> Ajouter</li>
          </a>
          <li class="list-group-item" @click="handleBtnEdit()">
            <i class="fas fa-edit"></i> Editer & Supprimer
          </li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-header">Genre</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fas fa-plus"></i> Ajouter</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminPage",
  components: {},
  methods: {
    handleBtnAdd() {
      return this.$router.push({ name: "AdminCreateBook" });
    },
    handleBtnEdit() {
      return this.$router.push({ name: "AdminMyBooks" });
    },
  },
};
</script>