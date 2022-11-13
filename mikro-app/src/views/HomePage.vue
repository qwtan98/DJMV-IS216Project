<template>
  <NavigationBar/>

    <div id="home" style="margin-left: 55px;">
      <br/>
      <div class="container">
      <h3 class="m-0">{{ callGreeting() }}</h3>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
       
        <div class="row">
          <h6 class="mt-4 mb-1" style="font-weight: bold">Daily Brief 📰</h6>
          <small class="text-muted" style="font-size: 10px">Insights curated specially for you</small>
          <hr/>
        </div>



        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img :src= headlines[0].urlToImage class="d-block w-100" alt="...">
            <div class="carousel-caption d-block ">
              <h4 style="font-size: 15px;"></h4>
              <p style="margin-top:5px">{{ headlines[0].content }}</p>
            </div>
          </div>
          <div v-for="headline of headlines.splice(1, 9)" :key=headline.id class="carousel-item" data-bs-interval="5000">
            <img :src= headline.urlToImage class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
              <h4 style="font-size: 15px;">{{ headline.content }}</h4>
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
    
    <div class="row">
      <h6 class="mt-4 mb-1" style="font-weight: bold">Community 🏠</h6>
      <small class="text-muted" style="font-size: 10px">Find out the events happening in the  community</small>
      <hr/>
      <div class="col-sm-6">
        <div class="card" style="font-size: 12px; height: 280px;">
          <img class="card-img-top" src="../assets/ui/crypto_community.jpg" style="height: 50%" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 12px">HOW TO INVEST IN ECO FRIENDLY CRYPTO</h5>
            <p class="card-text" style="font-size: 10px"><i class="bx bx-time"></i> &nbsp;MONDAY, NOVEMBER 14TH<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;230PM - 330PM SGT<br/>📅&nbsp;Online Event</p>
            <router-link to="/CommunityEvent1">
              <a href="" class="btn btn-primary" style="font-size: 13px; color: white;">Find out more</a>
            </router-link>
            </div>
        </div>
      </div>
      <div class="mt-2 col-sm-6">
        <div class="card" style="font-size: 12px; height: 280px">
          <img class="card-img-top" src="../assets/ui/inflation_community.avif" style="height: 50%" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 12px">HOW TO DIVERSIFY DURING HIGH INFLATION</h5>
            <p class="card-text" style="font-size: 10px"><i class="bx bx-time"></i> &nbsp;MONDAY, NOVEMBER 14TH<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;530PM - 645PM SGT</p>
            <router-link to="/CommunityEvent2">
            <a href="#" class="btn btn-primary" style="font-size: 13px; color: white;">Find out more</a>
            </router-link>
           </div>
        </div>
      </div>
      <div class="mt-2 mb-2 col-sm-6">
        <div class="card" style="font-size: 12px; height: 280px">
          <img class="card-img-top" src="../assets/ui/dividend_community.jpg" style="height: 50%" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 12px">YOUR GUIDE TO DIVIDEND STOCKS</h5>
            <p class="card-text" style="font-size: 10px"><i class="bx bx-time"></i> &nbsp;WEDNESDAY, NOVEMBER 23RD<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;130PM - 230PM SGT</p>
          <router-link to="/CommunityEvent3">
            <a href="#" class="btn btn-primary" style="font-size: 13px; color: white;">Find out more</a>
          </router-link>
          </div>
        </div>
      </div>
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
          // let api_endpoint2 = "https://www.googleapis.com/youtube/v3/search"
          axios.get(api_endpoint).then(response =>
            {
              console.log(response.data.articles)
              this.headlines = response.data.articles
            })

          .catch(error => {
            console.log(error)
          })

          // axios.get(api_endpoint2).then(response =>
          //   {
          //     console.log(response)
             
          //   })

          // .catch(error => {
          //   console.log(error)
          // })
        },

        callGreeting () {
      
          if (new Date().getHours() > 6 && new Date().getHours() < 12) 
          {
            return "Good Morning, Chatur 🌞!"
          }

          else if  (new Date().getHours() > 11 && new Date().getHours() < 17)
          {
            return "Good Afternoon, Chatur ☕!"
          }
      
          else 
          {
            return "Good Evening, Chatur 🌙!"
          }
          
        }
      },

      beforeMount() {
        this.created()
      },

      mounted () {
        this.callGreeting()
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

  .card 
  {
    box-shadow: rgb(255, 255, 255) 10 10 10 10;
    border: solid rgb(195, 190, 190) 1px;
    background-color: rgb(227, 237, 247);
  }
  </style>
  