<template>
  <div id="app">
    <!-- <NavigationBar/> -->
    <router-view></router-view>
    <TheFooter/>
  <!-- <LoginPage/>
  <RegisterPage/>
  <AchievementsPage/>
  <LessonsPage/> -->
  </div>
</template>

<script>
// import HomePage from './views/HomePage.vue';
// import NavigationBar from './components/NavigationBar.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',

  components: {
    TheFooter
  },
  methods: {

    
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
