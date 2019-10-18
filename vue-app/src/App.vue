<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>


<script>
import Header from './shared/components/header/header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
