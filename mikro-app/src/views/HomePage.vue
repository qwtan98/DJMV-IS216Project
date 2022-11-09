<template>
  <div class="container">
    <div id="home" style="margin-left: 78px;">
      <h1>This is the Home Page.</h1>
      <h2>{{ quotes[0] }}</h2>
      <h3>User insights and dashboard goes here</h3>      
    </div>
  </div>

  </template>
  
  <script>
  //import NavigationBar from "../components/NavigationBar";
  export default 
  {
      name: 'HomePage',

      components: 
      {

      },

      data()
      {
          return{
  
              quotes: ['Migrate to a better future today', 'Grow your wealth today']
          }
      },

  
      props: 
      {
        msg: String
      }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  