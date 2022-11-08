<template>
    <div class="settings-background">

            <div class="settings">

                <div class="settings-list">
                    
                    <div class="settings-subbox">
                        <h1>Settings</h1>
                        <p>Edit Profile</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Help & Support</h2>
                        <p>Support</p>
                        <p>Test</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Theme</h2>
                        <p>Dark Mode</p>
                    </div>
                    
                    <div class="settings-subbox">
                        <h2>Privacy</h2>
                        <p>Change Password</p>
                        <p>Terms & Conditions</p>
                        <p>About Mikro</p>
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
</style>