<template>
  <div id="app">
    <NavigationBar/>
    <router-view></router-view>
  <!-- <LoginPage/>
  <RegisterPage/>
  <AchievementsPage/>
  <LessonsPage/> -->
  </div>
</template>

<script>
// import HomePage from './views/HomePage.vue';
import NavigationBar from './components/NavigationBar.vue';
// import LoginPage from './views/LoginPage.vue'
// import RegisterPage from './views/RegisterPage.vue'
// import AchievementsPage from './views/AchievementsPage.vue'
// import LessonsPage from './views/LessonsPage.vue'


export default {
  name: 'App',
  components: {
    // HomePage,
    NavigationBar
}
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
