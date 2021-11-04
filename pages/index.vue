<template>
  <div class="flex w-screen">
    <sidebar></sidebar>
    <div class="w-full bg-main flex-1 flex flex-col">
      <nav-bar></nav-bar>
      <tab-nav></tab-nav>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar.component.vue'
import NavBar from '../components/Navbar.component.vue'
import TabNav from '../components/TabNav.component.vue'
export default {
  components: { Sidebar, NavBar, TabNav },
}
</script>
