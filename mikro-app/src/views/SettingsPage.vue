<!-- To Do:
Find a way to get the modals to centre vertically.
Add dark mode functionality.
Insert content in Edit Profile, Support, Change Password, and TnC. -->


<template>
    <div class="settings-background">

            <div class="settings">

                <div class="settings-list">
                    
                    <div class="settings-subbox">

                        <h1>Settings</h1>
                        
                        <p href="#editProfileModal" data-bs-toggle="modal"><img id="setting-icons" src="../assets/ui/user.png" alt="">Edit Profile</p>                          
                        
                        <!-- Edit Profile Modal id="editProfileModel" -->
                        <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="editProfileModalLabel">Edit Profile</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        Add in username field, change profile picture, change title (maybe title link to Achievements, like Salesforce)
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
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="supportModalLabel">Support</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        Add in support hotline, hours.
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
                            <div class="modal-dialog">
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
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="tncModalLabel">Terms & Conditions</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        Terms and Conditions
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
                            <div class="modal-dialog">
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
    export default 
    {
        name: 'SettingsPage',
        props: 
        {

        }
    }
</script>


<style scoped>

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

.modal-dialog {
    padding-top: 20%;
    /* modal might extend downwards if too big. change if this happens. */
}
</style>