<template>
  <div class="flex w-screen">
    <side-menu></side-menu>
    <div class="bg-main flex-1 flex flex-col overflow-x-scroll">
      <nav-bar></nav-bar>
      <tab-nav></tab-nav>
      <cardslist></cardslist>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/Navbar.component.vue'
import TabNav from '../components/TabNav.component.vue'
import SideMenu from '../components/SideMenu.component.vue'
import Cardslist from '../components/CardsList.component.vue'
export default {
  components: { SideMenu, NavBar, TabNav, Cardslist },
}
</script>
