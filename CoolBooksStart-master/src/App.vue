<template>
  <div id="app">

    <div class="page-wrapper">
      <!-- HEADER DESKTOP-->
      <header class="header-desktop3 d-none d-lg-block">
        <div class="section__content section__content--p35">
          <div class="header3-wrap">
            <div class="header__logo">
              <router-link class="nav-link" to="/home" >
                <img src="@/assets/images/icon/logo-white.png" alt="CoolAdmin" />
              </router-link>
            </div>
            <div class="header__navbar">
              <ul class="list-unstyled">

                <li>
                  <router-link class="nav-link" to="/home" >
                    <i class="fas fa-book"></i>
                    <span class="bot-line"></span>Livres</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/genre">
                    <i class="fas fa-copy"></i>
                    <span class="bot-line"></span>Genre</router-link>
                </li>
                <li>

                  <router-link class="nav-link" to="/admin">
                    <i class="fas fa-cogs"></i>
                    <span class="bot-line"></span>Admin</router-link>
                </li>
              </ul>
            </div>



          </div>
        </div>
      </header>
      <router-view></router-view>
      <div class="page-content--bgf7">

        <section class="welcome p-t-10">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="title-4"> le titre
                </h1>
                <hr class="line-seprate">
              </div>
            </div>
          </div>
        </section>
        <section class="container">
        </section>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {


  }
}
</script>

<style>

</style>
