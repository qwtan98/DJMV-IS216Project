<template>
  <div id="app">
<<<<<<< Updated upstream
    <NavigationBar @search-input-emit="search"/>
    <router-view></router-view>
    <TheFooter/>
=======
  <img alt="Vue logo" src="./assets/ui/mikro_logo.png">
  <router-view></router-view>
>>>>>>> Stashed changes
  <!-- <LoginPage/>
  <RegisterPage/>
  <AchievementsPage/>
  <LessonsPage/> -->
  </div>
</template>

<script>
// import HomePage from './views/HomePage.vue';
import NavigationBar from './components/NavigationBar.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',

  components: {
    NavigationBar,
    TheFooter
  },
  methods: {
    search()
    {
      
    }
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
