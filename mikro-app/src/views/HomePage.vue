<template>
  <NavigationBar/>
  <div class="container-fluid">
    <div id="home" style="margin-left: 58px;">
      <h1>Hello, Chatur!</h1>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
       
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img :src= headlines[0].urlToImage class="d-block w-100" alt="...">
            <div class="carousel-caption d-block">
              <h3>{{ headlines[0].content }}</h3>
              <!-- <p>Some representative placeholder content for the second slide.</p> -->
            </div>
          </div>
          <div v-for="headline of headlines.splice(1, 9)" :key=headline.id class="carousel-item" data-bs-interval="6000">
            <img :src= headline.urlToImage class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h3>{{ headline.content }}</h3>
              <!-- <p>Some representative placeholder content for the second slide.</p> -->
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  </template>
  
  <script>
  import axios from "axios";
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
              headlines: []
        
          }
      },

  
      props: 
      {
        msg: String
      },

      methods:
      {
        created: function() {
          let api_endpoint = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=01d127c2f33a483c939e689920e7bab9"

          axios.get(api_endpoint).then(response =>
            {
              console.log(response.data.articles)
              this.headlines = response.data.articles
            })

          .catch(error => {
            console.log(error)
          })
        }
      },

      beforeMount() {
        this.created()
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
  