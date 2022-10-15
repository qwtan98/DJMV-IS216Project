<template>
  <img alt="Vue logo" src="./assets/ui/mikro_logo.png">
  <HomePage msg="Welcome to Your Vue.js App"/>
  <HomePage/>
  <LoginPage/>
  <RegisterPage/>
  <AchievementsPage/>
  <LessonsPage/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import AchievementsPage from './components/RegisterPage.vue'
import LessonsPage from './components/LessonsPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    LoginPage,
    RegisterPage,
    AchievementsPage,
    LessonsPage
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
