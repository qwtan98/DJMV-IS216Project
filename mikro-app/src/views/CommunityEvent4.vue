<template>
    <div id="CommunityEvent4" class="container py-4 py-xl-5">
        <router-link to="/home">
            <i class="bx bx-arrow-back"></i>
        </router-link>

        <div class="card" style="font-size: 12px; height: ;">
            <img class="card-img-top" src="../assets/ui/dividend_community.jpg" style="width: 100%; height: 50%" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" style="font-size: 12px">YOUR GUIDE TO DIVIDEND STOCKS</h5>
              <p class="card-text" style="font-size: 10px"><i class="bx bx-time"></i>&nbsp; WEDNESDAY, NOVEMBER 23RD<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;130PM - 230PM SGT<br/>📅&nbsp;Online Event</p>
                <button class="btn btn-primary" style="font-size: 13px; color: white;" @click="comfirmRegister()">Register</button>
                <br/>
                <br/>
                <p style=color:green>{{ message }} </p>
            </div>
           
          </div>
    </div>
  </template>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  *{
    margin: 0;
    padding: 0;
  }

</style>

<script>
    export default 
    {
        name: 'CommunityEvent4',

        data (){
            return {
                message: ""
            }
        },

        components: {
           
        },
        methods: {
            comfirmRegister() {
                this.message = "Comfirmed registration! See you there 😊"
                return this.message
            }
        }
 

        }
</script>