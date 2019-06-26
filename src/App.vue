<template>
  <div id="app">
  <Navigation></Navigation>

  <router-view></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Navigation,
    Footer,
  }
}
</script>

<style lang="scss">
@import 'assets/scss/styles.scss';
</style>
