<template>
    <div id="progress" style="margin-left: 55px;">
        <FirebaseDatabase></FirebaseDatabase>
        <div class="container-fluid">
            <div class="row">
                <div class="progress-page-tab col-6 text-center align-self-center">
                    <span class>Achievements</span>
                </div>
                <div class="progress-page-tab col-6 text-center align-self-center">
                    <span class>Achievements</span>
                </div>
            </div>
        </div>
        <div class="container" style="background-color:wheat">
            <div class="row" style ="padding: 10px">
                <div class="col-4" style ="height:125px">
                    <img src="../assets/ui/chatur.webp" style="height:125px; width:125px"/>
                </div>
                <div class="col-8 d-flex-column align-self-end">
                    <h2>Achievements Title</h2>
                    <span>Progress bar</span>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import FirebaseDatabase from '../components/FirebaseDatabase.vue';

// Initialize Firebase

    export default {
        name: "AchievementsPage",
    
        props: {},
    
        components: { 
            FirebaseDatabase 
        }
    }
</script>

<style>
.progress-page-tab {
    background-color:aquamarine;
    justify-content: center;
}
</style>