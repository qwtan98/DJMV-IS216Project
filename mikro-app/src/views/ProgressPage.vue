<template>
    <NavigationBar/>
    <div class="modal" id="progressPopup" tabindex="-1" aria-labelledby="progressPopupLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="background-color:aliceblue">

                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <img :src="require(`../assets/${pop_up_data.img_name}.png`)" style="height:200px; width:200px">
                        <h2>{{pop_up_data.name}}</h2>
                        <p>{{pop_up_data.desc}}</p>
                        <p>{{pop_up_data.completedDate }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>  

    <div id="progress" style="margin:0 0 35px 55px; padding: 0">
        <div class="">
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

                        <div class="d-flex justify-content-center p-2 m-2"
                            style="background-color: #11101d; height:100%; width: 70%; border-radius: 50px;">
                            <img src="../assets/achievement.png" style="width:100%">
                        </div>

                        <div    class="text-center d-flex flex-column" 
                                style="width:100%">

                            <span style="font-size: min(3.5vw, 1rem)">Achievements</span>
                            <span style="font-size: min(2.5vw, 0.8rem)">21/32 completed</span>
                        </div>

                    </div>

                    <div class="col-6 d-flex flex-column justify-content-center align-items-center">

                        <div class="d-flex justify-content-center p-2 m-2"
                            style="background-color: #11101d; height:100%; width: 70%; border-radius: 50px;">
                            <img src="../assets/badge.png" style="width:100%">
                        </div>

                        <div    class="text-center d-flex flex-column" 
                                style="width:100%">
                            <span style="font-size: min(3.5vw, 1rem)">Badges</span>
                            <span style="font-size: min(2.5vw, 0.8rem)">23/35 received</span>
                        </div>

                    </div>
                </div>
            </div>

            
            <div id="recent-achievement-section">
                <div class="d-flex align-items-center achievement-page-section-header" style="background-color:#2f4863d9; color:aliceblue">
                    <img src="../assets/achievement.png" class="col-2 p-2">
                    <span   class="col" 
                            style="font-size:min(4.5vw, 1.25rem); font-weight: bold;">Recent Achievements 
                    </span>
                </div>
                <div class="d-flex-block" style="background-color: aliceblue;">
                    <div v-if ="data_length() <= 0" class="py-2">
                        <span   class="d-flex align-items-center justify-content-center" 
                                style="font-size:0.8rem;">
                            - No recent achievements to show -
                        </span>
                    </div>
                    <div v-else>
                        <div v-for="data in my_data" :key="data.aid" class="d-flex-block">
                            <div v-if="data.type =='achievement'" @click="get_data_from_index(data.aid)">
                                <div class="d-flex py-2" href="#progressPopup" data-bs-toggle="modal">
                                    <img src="../assets/achievement.png" class="col-2 p-1">
                                    <div class="recent-achievement-details d-flex flex-column align-items-left justify-content-center col">
                                        <span style="font-size:1rem;">{{data.name}}</span>
                                        <span style="font-size:0.8rem;">{{data.description}}</span>
                                    </div>
                                </div>
                                <hr style="margin: 0;">
                            </div>
                        </div>
                        
                        <div style="background-color:aliceblue" class="achievement-page-section-end d-flex align-items-center justify-content-center p-2">
                            <span class ="ms-3" style="font-size:1rem;">View more >> </span>
                        </div>
                    </div>

                </div> 

            </div>
            <div class="mt-1"></div>
            <div id="recent-badge-section">
                
                <div class="d-flex align-items-center achievement-page-section-header" style="background-color:#2f4863d9; color:aliceblue">
                    <img src="../assets/badge.png" class="col-2 p-2">
                    <span class ="col" style="font-size:min(4.5vw, 1.25rem); font-weight: bold;">Recent Badges </span>
                </div>
                
                <div class="d-flex-block" style="background-color: aliceblue;">
                    <div v-if ="data_length() <= 0" class="py-2">
                        <span   class="d-flex align-items-center justify-content-center" 
                                style="font-size:0.8rem;">
                            - No recent badges to show -
                        </span>
                    </div>
                    <div v-else>
                        <div v-for="data in my_data" :key="data.aid" class="d-flex-block">
                            <div v-if="data.type =='badge'" @click="get_data_from_index(data.aid)">
                                <div class="d-flex py-2" href="#progressPopup" data-bs-toggle="modal">
                                    <img src="../assets/badge.png" class="col-2 p-1">
                                    <div class="recent-achievement-details d-flex flex-column align-items-left justify-content-center col">
                                        <span style="font-size:1rem;">{{data.name}}</span>
                                        <span style="font-size:0.8rem;">{{data.description}}</span>
                                    </div>
                                </div>
                                <hr style="margin: 0;">
                            </div>
                        </div>
                        
                        <div style="background-color:aliceblue" class="achievement-page-section-end d-flex align-items-center justify-content-center p-2">
                            <span class ="ms-3" style="font-size:1rem;">View more >> </span>
                        </div>
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
                selected: {name: "", description: "", aid: ""},
                lessons: [{ Title: "The Basics of Investment", Subtitle: "Understand concepts of investment" }, { Title: "Dive into Investment", Subtitle: "" }
                ],
                my_data: 
                {
                    '1a2b3c': {aid: 1, type: "badge", description: 'some description 1', name: 'badge 1 name', img_name: "badge", completedDate: Date.now()},
                    '1a2b3d': {aid: 2, type: "badge", description: 'some description 2', name: 'badge 2 name', img_name: "badge", completedDate: Date.now()},
                    '1a2b3e': {aid: 3, type: "badge", description: 'some description 3', name: 'badge 3 name', img_name: "badge", completedDate: Date.now()},
                    '1a2b3f': {aid: 4, type: "achievement", description: 'some description 4', name: 'achievement 4 name', img_name: "achievement", completedDate: Date.now()}
                },
                pop_up_data: 
                {
                    aid: 0, desc: '', name: '',img_name: 'badge', completedDate: ''
                }
            };
        },

        methods: {
            get_data_from_index(data_aid) {
                for (const [id, value] of Object.entries(this.my_data)) {
                    if (value.aid === data_aid) {
                        this.pop_up_data.aid = value.aid
                        this.pop_up_data.type = value.type
                        this.pop_up_data.desc = value.description
                        this.pop_up_data.name = value.name
                        this.pop_up_data.img_name = value.img_name
                        var d = new Date(value.completedDate)
                        this.pop_up_data.completedDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear()
                        return id;
                    }
                }
                return false;
            },
            get_progress_type(data_aid, type) {
                for (const [id, value] of Object.entries(this.my_data)) {
                    if (value.aid === data_aid && id)
                        return this.pop_up_data.type == type
                }
                return false
            },
            data_length() {
                return Object.entries(this.my_data).length;
            }
        }
    }
</script>

<style>
.achievement-profile-tab {

    background-color: aliceblue;
    color: rgb(47, 72, 99);
 
    border-radius: 15px;
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
</style>

<style scoped>

</style>