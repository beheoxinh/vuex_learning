<template>
  <div class="navbar">
    <div class="title">
      <h1>My Vuex App Todos</h1>
    </div>
    <div class="user-panel">
      <div class="logged"  v-if="storeState.auth.isAuthenticated">
        <span>Welcome to my site</span>
        <button @click="loginOrLogout">Logout</button>
      </div>
      <div class="logged" v-else>
        <button @click="loginOrLogout">Login</button>
        or 
        <button>register</button>
      </div>
    </div>
    <ul class="nav-bar-list">
      <li>Home</li>
      <li>About</li>
      <li>Total Job: {{storeState.todos.length}} (Done {{processJob}}%)</li>
    </ul>
    <div class="status-bar">
      <ul>
        <li v-for="(todo,index) in activeTodo" :key="index">
          {{todo.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'comp-nav-bar',
  computed: {
    storeState(){
      return this.$store.state;
    },
    activeTodo(){
      return this.$store.getters.completedJob;
    },
    processJob(){
      return this.$store.getters.processJob;
    }
  },
  methods: {
    loginOrLogout(){
      this.$store.commit('TOGGLE_AUTH');
    }
  }
}
</script>

<style>
  .navbar{
    padding:5px;
    text-align: center;
    background: rgb(250, 250, 240);
    color: black;
  }
  .navbar ul.nav-bar-list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding:0;
  }
  .navbar .title{
    display: inline-block;
    width: 80%;
    height: 50px;
  }
  .user-panel{
    display: inline-block;
    width: 20%;
    height: 80px;
  }
  .status-bar ul{
    min-height: 25px;
    margin:5px;
    padding:0 5px;
    list-style: none;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
  .status-bar li{
    max-width: 80px;
    max-height: 17px;
    overflow: hidden;
    margin:1px 2px;
    padding:2px 5px;
    border-radius: 5px;
    border:1px solid gray;
    background: rgb(20, 180, 20);
  }
</style>