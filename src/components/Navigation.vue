<template>
<div>
  <b-navbar toggleable="sm" class="p-3 px-md-4 mb-3 border-bottom shadow-sm">
    <router-link class="navbar-brand" to="/">
      <img src="https://i.imgur.com/0UYRu82.png" class="d-inline-block align-top nav-logo" alt="nav brand">
      Scorewinner
    </router-link>
    <b-navbar-toggle class="navbar-toggler" target="nav_collapse">
      <i class="fas fa-bars"></i>
    </b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="/services">Services</b-nav-item>
            <b-nav-item href="/detail">Detail</b-nav-item>
            <b-nav-item href="/about">About</b-nav-item>
            <b-nav-item href="http://movie.scorewinner.ch">MovieScore</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'navigation',
}
</script>
