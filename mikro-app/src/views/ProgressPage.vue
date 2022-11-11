<template>
    <div class="d-flex-block" id="progress" style="margin-left: 55px;">
        <div class="container-fluid" style="max-height: 120px">
            <div class="row d-flex-inline">
                <img src="../assets/ui/chatur.webp" class="img-fluid" style="border-radius:20%; height: 100px; width: 100px"/>
                <div id="achievement-profile-desc" class="d-flex-column">
                    <span>Test</span>
                    <span>Test2</span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="progress-page-tab col-6 text-center align-self-center">
                    <span class>Achievements</span>
                </div>
                <div class="progress-page-tab col-6 text-center align-self-center">
                    <span class>Badges</span>
                </div>
            </div>
        </div>
        
        <div class="container-fluid" style="background-color:wheat">
            <div class="row d-flex-inlne" style ="padding: 10px">
                <div class="col-4 align-self-center">
                    <img src="../assets/ui/chatur.webp" class="img-fluid" style="height:75px;"/>
                </div>
                <div class="col-8 d-flex-column align-self-end">
                    <p class="f-3">An achievement!</p>
                    <p>Get an achievement</p>
                    <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 badge-container">
                    <img src="../assets/badge-img.png" alt="" style = "height: 100px; width: 100px">
                    <p>Badge description</p>
                </div>
                <div class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 badge-container">
                    <img src="../assets/badge-img.png" alt="" style = "height: 100px; width: 100px">
                    <p>Badge description</p>
                </div>                <div class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 badge-container">
                    <img src="../assets/badge-img.png" alt="" style = "height: 100px; width: 100px">
                    <p>Badge description</p>
                </div>                <div class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 badge-container">
                    <img src="../assets/badge-img.png" alt="" style = "height: 100px; width: 100px">
                    <p>Badge description</p>
                </div>
            </div>
        </div>
    </div>
    
  </template>
  
<script>
// import FirebaseDatabase from '../components/FirebaseDatabase.vue';

// Initialize Firebase

    export default {
        name: "AchievementsPage",
    
        props: {},
    
        components: { 
            // FirebaseDatabase 
        }
    }
</script>

<style>
.progress-page-tab {
    background-color:aquamarine;
    justify-content: center;

    font-size: 15px;
    padding: 15px;
}
.badge-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 200px;
}
</style>