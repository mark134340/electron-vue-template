<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
:root {
  --vh: 800px;
  
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
