<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{msg}}</h1>
     <ul>
        <li><router-link to="/fisrt">第一页</router-link></li>
        <li><router-link to="/second">第页</router-link></li>
      </ul>
    <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent>

  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent'
import secondcomponent from './components/secondcomponent'
export default {
/* eslint-disable */
  data() {
    return {
      msg: '1'
    }
  },
  components: {firstcomponent,secondcomponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
