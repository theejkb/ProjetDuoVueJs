<template>
  <div id="app">
    <div class="page-wrapper">
      <!-- HEADER DESKTOP-->
      <header class="header-desktop3 d-none d-lg-block">
        <div class="section__content section__content--p35">
          <div class="header3-wrap">
            <div class="header__logo">
              <a href="#">
                <img
                  src="@/assets/images/icon/logo-white.png"
                  alt="CoolAdmin"
                />
              </a>
            </div>
            <div class="header__navbar">
              <ul class="list-unstyled">
                <li class="nav-item">
                  <router-link class="nav-link" to="/home">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/genre">Genre</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/admin">Admin</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
