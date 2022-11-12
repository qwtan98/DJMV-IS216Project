<!-- To Do:
Add dark mode functionality?
Consider adding prompt for image. But as I understand, need a place to store the image. -->


<template>
    <NavigationBar/>
    <div class="settings-background">

            <div class="settings">

                <div class="settings-list">
                    
                    <div class="settings-subbox">

                        <h1>Settings</h1><br>
                        
                        <h2 href="#editProfileModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/user.png" alt="">Edit Profile</h2>                          
                        
                        <!-- Edit Profile Modal id="editProfileModel" -->
                        <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="editProfileModalLabel">Edit Profile</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        <div>
                                            <img src="../assets/ui/chatur.webp" id="editProfileModalPFP">
                                            <img src="../assets/ui/camera.png" id="editProfileModalPFPOverlay">
                                        </div>
                                        <div class="m-4">
                                            <!-- Set title (maybe title link to Achievements, like Salesforce) -->
                                            <label for="editProfileUsername" style="margin-left:10px; margin-bottom: 5px;">Change Username</label>
                                            <input type="text" class="form-control" id="editProfileUsername" placeholder="Chatur Ramalingam">
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" id="saveChangesBtn" v-on:click="saveChangesBtnFunc()">{{saveChangesBtn}}</button>
                                    </div>

                                </div>
                            </div>
                        </div>  

                    </div>
                    
                    <div class="settings-subbox">

                        <h2 href="#supportModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/support.png" alt="">Support</h2>
                        
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

                    </div>
                    
                    <div class="settings-subbox">

                        <h2 href="#aboutModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/about.png" alt="">About Mikro</h2>
                        
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
                                        The reason that propelled us to do so is because today, the majority of migrant workers don't have easy access to resources for expanding their investment knowledge, which restricts their capacity to grow their wealth. For migrant workers, accessing financial services on learning how to invest conveniently has undeniably proven to be a constant challenge.
                                        <br><br>
                                        We aim to combat this with Mikro.
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thanks!</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        }
    },
    methods: {
        saveChangesBtnFunc() {
            this.saveChangesBtn = "Changes saved!";
            }
        }
    }


</script>


<style scoped>

.skiptranslate {
    display: inline;
=======

h1 {
    text-align: center;

}
.settings-background {
    background-color: aliceblue;

}
.settings {
    margin-left: 78px;
}

.settings-list {
    margin-top: 28px;

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