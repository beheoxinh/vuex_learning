<template>
  <div id="app">
    <comp-nav-bar></comp-nav-bar>
    <comp-to-dos></comp-to-dos>
  </div>
</template>

<script>
import CompNavBar from './components/CompNavBar';
import CompToDos from './components/CompToDos';
export default {
  name: 'App',
  components: {CompToDos, CompNavBar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(210, 210, 210);
  color: #2c3e50;
  margin: 20px auto;
  padding:5px;
  widows: 90%;
  max-width: 800px;
}
</style>
