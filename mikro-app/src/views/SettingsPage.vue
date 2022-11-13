<!-- To Do:
Add dark mode functionality?
Consider adding prompt for image. But as I understand, need a place to store the image. -->


<template>
    <NavigationBar/>
    
    <div id="bigContainer" style="margin-left: 55px;">
        <div class="container settings-background">
            <div class="settings-subbox">
                <br/>
                <h1 style="text-align: left">Settings</h1>

                <div class="settingsBackground mb-4" style="height: 75px;">
                    Invite your friends to join you on this investment journey today!
                    <br/>
                    <span style="font-size: 14px;" class="">Invite Link:</span>&nbsp;<a href="" style="font-size:10px;">https://mikroinvite?id=1011</a>
                </div>
                <h2 style="font-size: 20px;" href="#editProfileModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/user.png" alt="">&nbsp;Edit Profile</h2>                          
                
                <!-- Edit Profile Modal id="editProfileModel" -->
                <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="editProfileModalLabel">&nbsp; Edit Profile</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div>
                                    <img src="../assets/ui/chatur.webp" id="editProfileModalPFP">
                                    <img src="../assets/ui/camera.png" id="editProfileModalPFPOverlay">
                                </div>
                                <div class="m-4 text-center">
                                    <!-- Set title (maybe title link to Achievements, like Salesforce) -->
                                    <label for="editProfileUsername" class="" style="margin-left:10px; margin-bottom: 5px;">Change Username</label>
                                    <input type="text" class="form-control text-center" id="editProfileUsername" placeholder="Chatur Ramalingam">
                                </div>
                            </div>

                            <div class="modal-footer d-flex justify-content-between">
                                <button type="button" class="btn btn-primary pull-left" id="saveChangesBtn" style="" v-on:click="saveChangesBtnFunc()">{{saveChangesBtn}}</button>
                                <button type="button" class="btn btn-secondary pull-right" data-bs-dismiss="modal" style="">Close</button>
                            </div>
                        </div>
                    </div>
                </div>  
                <hr/>
            </div>

            <div class="settings-subbox">

                <h2 style="font-size: 20px" href="#supportModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/support.png" alt="">&nbsp;Support</h2>
                
                <!-- Support Modal id="supportModal" -->
                <div class="modal fade" id="supportModal" tabindex="-1" aria-labelledby="supportModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="supportModalLabel">Support</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                Hotline: +65 9123 4567
                                <br>
                                Email: helpdesk@mikro.com
                                <br><br>
                                Weekday: 9 a.m. - 6 p.m.
                                <br>
                                Weekend: 10 a.m. - 3 p.m.
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>  
                <hr/>
            </div>
            
            <div class="settings-subbox">

                <h2 style="font-size: 20px" href="#aboutModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/about.png" alt="">&nbsp;About Mikro</h2>
                
                <!-- About Modal id="aboutModal" -->
                <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="aboutModalLabel">About Mikro</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                Mikro is a project aiming to increase financial inclusion and literacy among migrant workers in Singapore, by creating an accessible one-stop financial solution to help kickstart or improve migrant workers' knowledge on investing.
                                <br><br>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
                <hr/>
            </div>

            <div class="settings-subbox">

                <h2 style="font-size: 20px" href="#rateModal" data-bs-toggle="modal"><i id="" class="bx bx-star" alt=""></i>&nbsp;Rate us</h2>
                
                <!-- About Modal id="aboutModal" -->
                <div class="modal fade" id="rateModal" tabindex="-1" aria-labelledby="rateModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="aboutModalLabel">How did you like Mikro?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body text-center">
                                <button @click="Satisfied()" class="p-3 m-3 btn btn-primary" style="font-size: 40px; border-radius: 50%">😃</button>
                                <button  @click="notSatisfied()" class="p-3 m-3 btn btn-primary" style="font-size: 40px; border-radius: 50%" >😶</button>
                                <br>
                                Select One Emoji
                                <br/>
                                <br/>
                                <p style="background-color: aliceblue">{{ message }}</p>
                            </div>
                           

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
</template>

<script>
    import NavigationBar from "../components/NavigationBar"
    export default 
    {
    name: 'SettingsPage',
    components: {NavigationBar},
    data() {
        return {
            saveChangesBtn: "Save changes",
            message: "",
        }
    },
    methods: {
        saveChangesBtnFunc() {
            this.saveChangesBtn = "Changes saved!";
            },

        notSatisfied() {
            this.message = "Thanks for the input! Do leave us a review for us to improve! 😊"
            return this.message
        },

        Satisfied() {
            this.message = "Thanks for the input! We will continue working to improve Mikro! 😊"
            return this.message
        }
    }
}


</script>


<style scoped>


.skiptranslate {
    display: inline;
}
h1 {
    text-align: center;

}


.settings-background {
    height: 100vh;
    background: url("../assets/ui/settingsBg.png") no-repeat bottom right;
    background-color: aliceblue;
    
}




.settings-subbox {
    margin-bottom: 28px;
}

#settings-card {
    margin: 50px 0px 50px 0px;
    padding: 40px 30px 60px 30px;

    outline: none;
    border: none;

    width:540px;
    background-color: azure;
}

#card-outline {
    width: 100%;
    background-color:#344c64;


    display: flex;
    justify-content: center;
}

#setting-icons {
    height: 15px;
    padding-right: 4px;
    margin-bottom: 3px;
    margin-left: 2px;
}

#editProfileModalPFP {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #344c64;
    filter: brightness(50%);
    position: relative;
    z-index: 1;
    display: flex;
    margin: auto;
}

#editProfileModalPFPOverlay {
    height: 30px;
    width: 30px;
    z-index:2;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    margin-top: 40px;
    margin-left:auto;
    margin-right: auto;
    margin-bottom: auto;
}
</style>