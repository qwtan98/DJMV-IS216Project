<template>
  <img alt="Vue logo" src="./assets/ui/mikro_logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomePage/>
  <LoginPage/>
  <RegisterPage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
    LoginPage,
    RegisterPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
