<template>
  <div class="admin">
    <div class="container-fluid p-5">
      <h1>ADMIN</h1>
      <div class="card" style="width: 18rem">
        <div class="card-header">Books</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" @click="handleBtnAdd">
            <i class="fas fa-plus"></i> Ajouter
          </li>
          <li class="list-group-item" @click="handleBtnEdit">
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
};
</script>