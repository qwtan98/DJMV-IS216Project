<template>
    <div class="settings-background">

            <div class="settings">

                <div class="settings-list">
                    
                    <div class="settings-subbox">
                        <h1>Settings</h1>
                        
                        <p><img id="setting-icons" src="../assets/ui/user.png" alt="">Edit Profile</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Help & Support</h2>
                        <p><img id="setting-icons" src="../assets/ui/support.png" alt="">Support</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Theme</h2>
                        <p><img id="setting-icons" src="../assets/ui/dark_mode.png" alt="">Dark Mode</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Privacy</h2>
                        <p><img id="setting-icons" src="../assets/ui/password.png" alt="">Change Password</p>
                        <p><img id="setting-icons" src="../assets/ui/tnc.png" alt="">Terms & Conditions</p>
                        <p><img id="setting-icons" src="../assets/ui/about.png" alt="">About Mikro</p>
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
</style>