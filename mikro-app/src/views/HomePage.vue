<template>
  <NavigationBar/>
  <div class="container">
    <div id="home" style="margin-left: 58px;">
      <h1>Hello, Chatur!</h1>
   
    </div>
  </div>

  </template>
  
  <script>
  import NavigationBar from "../components/NavigationBar";
  export default 
  {
      name: 'HomePage',

      components: {
        NavigationBar
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
  body {
    top: 0 !important;
  }

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
  