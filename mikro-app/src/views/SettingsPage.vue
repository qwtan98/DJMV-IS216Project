<!-- To Do:
Add dark mode functionality.
Centre camera icon over pfp. Now it is lower than the centre.
Consider making it clickable, and prompts for image.
Insert content in Edit Profile, Change Password. -->


<template>
    <NavigationBar/>
    <div class="settings-background">

            <div class="settings">

                <div class="settings-list">
                    
                    <div class="settings-subbox">

                        <h1>Settings</h1>
                        
                        <p href="#editProfileModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/user.png" alt="">Edit Profile</p>                          
                        
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
                                        Set title (maybe title link to Achievements, like Salesforce)
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>

                                </div>
                            </div>
                        </div>  

                    </div>
                    
                    <div class="settings-subbox">

                        <h2>Help & Support</h2>

                        <p href="#supportModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/support.png" alt="">Support</p>
                        
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
                        <h2>Theme</h2>
                        <p><img id="setting-icons" src="../assets/ui/dark_mode.png" alt="">Dark Mode</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Privacy</h2>
                        <p href="#changePasswordModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/password.png" alt="">Change Password</p>
                        
                        <!-- Change Password Modal id="changePasswordModal" -->
                        <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-labelledby="changePasswordModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="changePasswordModalLabel">Change Password</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        Add in password box either via Firebase or otherwise
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>

                                </div>
                            </div>
                        </div>  

                        <p href="#tncModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/tnc.png" alt="">Terms & Conditions</p>
                        
                        <!-- TNC Modal id="tncModal" -->
                        <div class="modal fade" id="tncModal" tabindex="-1" aria-labelledby="tncModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="tncModalLabel">Terms & Conditions</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit et atque voluptate alias delectus nesciunt, saepe dolorum a beatae facere perspiciatis doloribus sit veritatis. Voluptatem consectetur soluta quisquam et doloribus!
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>

                                </div>
                            </div>
                        </div>  

                        <p href="#aboutModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/about.png" alt="">About Mikro</p>
                        
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
    import NavigationBar from "../components/NavigationBar";
    export default 
    {
        name: 'SettingsPage',
        components: {NavigationBar},
        props: 
        {

        }
    }
</script>


<style scoped>
.skiptranslate {
    display: inline;
}
.settings-background {
    background-color: white;

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