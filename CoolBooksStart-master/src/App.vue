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
<home-page></home-page>
    </div>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage,


  }
}
</script>

<style>

</style>
