<template>
    <NavigationBar/>
    <div id="progress" style="margin:0 0 35px 55px; padding: 0">
        <div class="">
            <p href="#progress_popup" data-bs-toggle="modal">Test</p>                          
            
            <!-- Edit Profile Modal id="editProfileModel" -->
            <div class="modal" id="editProfileModal" tabindex="-1" aria-labelledby="progress_popup" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
    
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
    
                        <div class="modal-body">
                            <div>
                            </div>
                        </div>
    
                        <div class="modal-footer">
                        </div>
    
                    </div>
                </div>
            </div>  
            <div class="p-3 achievement-profile-tab">

                <div class="d-flex p-2" style="width: 100%">

                    <div class="col-4 d-flex justify-content-end">
                        <img    src="../assets/ui/chatur.webp" class="img-fluid" 
                                style="max-height: 100px; aspect-ratio: 1/1 ;object-fit:cover; border-radius:15px">

                    </div>

                    <div class="col-8 ms-4 d-flex align-items-center">
                        <span style="font-size:min(6vw, 50px);">Chatur Ramalingam</span>
                    </div>

                </div>

                <div class="d-flex">

                    <div class="col-6 d-flex flex-column justify-content-start align-items-center">

                        <img    src="../assets/achievement.png" 
                                style="width:70%">
                        <div    class="text-center d-flex flex-column" 
                                style="width:100%">

                            <span style="font-size: min(3.5vw, 1rem)">Achievements</span>
                            <span style="font-size: min(2.5vw, 0.8rem)">21/32 completed</span>
                        </div>

                    </div>

                    <div class="col-6 d-flex flex-column justify-content-center align-items-center">

                        <img src="../assets/badge.png" style="width:70%">

                        <div    class="text-center d-flex flex-column" 
                                style="width:100%">
                            <span style="font-size: min(3.5vw, 1rem)">Badges</span>
                            <span style="font-size: min(2.5vw, 0.8rem)">23/35 received</span>
                        </div>

                    </div>
                </div>
            </div>

            
            <div id="recent-achievement-section">
                <div class="d-flex align-items-center achievement-page-section-header" style="background-color:#2f4863d9; color:beige">
                    <img src="../assets/achievement.png" class="col-2 p-2">
                    <span   class="col" 
                            style="font-size:min(4.5vw, 1.25rem); font-weight: bold;">Recent Achievements 
                    </span>
                </div>

                <div class="d-flex-block" style="background-color: beige;">

                    <!-- <div v-if =""> -->
                    <div class ="" style="">
                        <span   class="d-flex align-items-center justify-content-center p-2" 
                                style="font-size:0.8rem;">
                            - No recent achievements to show -
                        </span>
                    </div>
                    <div class="pt-2"></div>

                    <div>
                        <div class="d-flex py-2">
                            <img src="../assets/achievement.png" class="col-2 p-1">
                            <div class="recent-achievement-details d-flex flex-column align-items-left justify-content-center col">
                                <span style="font-size:1rem;">Achievement</span>
                                <span style="font-size:0.8rem;">Details</span>
                            </div>
                        </div>
                        <hr style="margin:0; padding: 0">
                    </div>
                    <div>
                        <div class="d-flex py-2">
                            <img src="../assets/achievement.png" class="col-2 p-1">
                            <div class="recent-achievement-details d-flex flex-column align-items-left justify-content-center col">
                                <span style="font-size:1rem;">Achievement</span>
                                <span style="font-size:0.8rem;">Details</span>
                            </div>
                        </div>
                        <hr style="margin:0; padding: 0">
                    </div>
                    <div>
                        <div class="d-flex py-2">
                            <img src="../assets/achievement.png" class="col-2 p-1">
                            <div class="recent-achievement-details d-flex flex-column align-items-left justify-content-center col">
                                <span style="font-size:1rem;">Achievement</span>
                                <span style="font-size:0.8rem;">Details</span>
                            </div>
                        </div>
                        <hr style="margin:0; padding: 0">
                    </div>

                    <div style="background-color:beige" class="achievement-page-section-end d-flex align-items-center justify-content-center p-2">
                        <span class ="ms-3" style="font-size:1rem;">View more >> </span>
                    </div>
                </div> 

            </div>


            <div id="recent-badge-section">
                
                <div class="d-flex align-items-center achievement-page-section-header" style="background-color:#2f4863d9; color:beige">
                    <img src="../assets/badge.png" class="col-2 p-2">
                    <span class ="col" style="font-size:min(4.5vw, 1.25rem); font-weight: bold;">Recent Badges </span>
                </div>
                
                <div class="d-flex-block" style="background-color: beige;">

                    <!-- <div v-if =""> -->
                    <div>
                        <span class="d-flex align-items-center justify-content-center p-2" style="font-size:0.8rem; border-radius: 0 0 15px 15px; background-color: beige;">
                            - No recent badges to show -
                        </span>
                    </div>
                    <div class="pt-2"></div>

                    <div>
                        <div class="d-flex py-2">
                            <img src="../assets/badge.png" class="col-2 p-1">
                            <div class="recent-badge-details d-flex flex-column align-items-left justify-content-center col">
                                <span style="font-size:1rem;">Badge</span>
                                <span style="font-size:0.8rem;">Details</span>
                            </div>
                        </div>
                        <hr style="margin:0; padding: 0">
                    </div>

                    <div>
                        <div class="d-flex py-2">
                            <img src="../assets/badge.png" class="col-2 p-1">
                            <div class="recent-badge-details d-flex flex-column align-items-left justify-content-center col">
                                <span style="font-size:1rem;">Badge</span>
                                <span style="font-size:0.8rem;">Details</span>
                            </div>
                        </div>
                        <hr style="margin:0; padding: 0">
                    </div>
                    
                    <div>
                        <div class="d-flex py-2">
                            <img src="../assets/badge.png" class="col-2 p-1">
                            <div class="recent-badge-details d-flex flex-column align-items-left justify-content-center col">
                                <span style="font-size:1rem;">Badge</span>
                                <span style="font-size:0.8rem;">Details</span>
                            </div>
                        </div>
                        <hr style="margin:0; padding: 0">
                    </div>

                    <div style="background-color:beige" class="achievement-page-section-end d-flex align-items-center justify-content-center p-2">
                        <span class ="ms-3" style="font-size:1rem;">View more >> </span>
                    </div>

                </div> 

            </div>

        </div>

    </div>
    
  </template>
  
<script>
// Initialize Firebase
    import NavigationBar from "../components/NavigationBar";
    export default 
    {
        name: "ProgressPage",
        components: { NavigationBar },
        props: {},
        data() {
            return {
                lessons: [{ Title: "The Basics of Investment", Subtitle: "Understand concepts of investment" }, { Title: "Dive into Investment", Subtitle: "" }
                ]
            };
        },
    }
</script>

<style>
.achievement-profile-tab {

    background-color: beige;
    color: rgb(47, 72, 99);
 
    border-radius: 15px;
/*  box-shadow: 8px 8px rgba(47,72,99,.35);
    transition: all .25s ease; */
} 

.achievement-category-tab:hover {
  box-shadow: 5px 5px #2f4863d9;
}

.achievement-page-section-header {
    border-radius: 15px 15px 0 0;
}

.achievement-page-section-end {
    border-radius: 0 0 15px 15px;
}

#recent-achievement-section {
    background-color: #2f4863;
    border-radius: 15px;
}

#recent-badge-section {
    background-color: #2f4863;
    border-radius: 15px;
}

.recent-achievement-details {
    
}

.recent-badge-details {

}

</style>

<style scoped>

</style>