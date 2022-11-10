<template>
    <div class="login-register">
        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div id="log-in-card" class="card col-md-6 mx-auto rounded-0">
                    <span id="card-outline" style="height:4px"></span>

                    <img class="card-img-top mx-auto" src="../assets/ui/mikro_logo_trim.png" alt="mikro logo" style="max-width:250px; padding:50px"> 
                    
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div id="login_inputfields" class="form-group mt-2">
                                <input type="email" class="form-control rounded-0" autofocus="autofocus" maxlength="25" id="loginInputUID" required="required" v-model="email">
                                <span id="input-field-label">User ID</span>
                                <span id="input-field-underline"></span>
                            </div>

                            <div id="login_inputfields" class="form-group mt-5">
                                <input type="password" class="form-control rounded-0" id="loginInputPW" required="required" v-model="password">
                                <span id="input-field-label">Password</span>
                                <span id="input-field-underline"></span>
                            </div>
                        </form>

                        <div>
                            <router-link to="/">
                                <button id="login-btn" class="btn btn-primary w-100 mt-5" type="submit">
                                    <div id="login-btn-container">
                                        <span>Log in</span>
                                        <img id="login-btn-img" src="../assets/ui/enter-icon.png" alt="">
                                        <div id="login-btn-overlay"></div>
                                    </div>
                                
                                </button>
                            </router-link>
                        </div>

                        <!-- <div>
                            <router-link to="Register">
                                <button id="register-btn" class="btn btn-outline-primary w-100 mt-3" style="font-size:20px; height: 65px;">
                                    Register
                                </button>
                            </router-link>
                        </div> -->

                        <div class ="d-flex justify-content-start mt-3" style="font-size:20px;">
                            <router-link to="/">
                                Forgot your User ID or Password?
                            </router-link>
                        </div>
                    </div>

                    <span id="card-outline" class="mt-5" style="height:4px"></span>
                </div>
            </div>
        </div>
        
    </div>
</template>
  
<script>
    //import NavigationBar from "../components/NavigationBar";
    export default 
    {
        name: 'LoginRegisterPage',

        components: {
            //NavigationBar
        },

        props: 
        {

        }
    }
</script>

<style>
#log-in-card {
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

.form-control:focus {
  border-color: none;
  box-shadow: none;
}
.form-control:selected {
    border-color: #2f4863;
}
.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: #2f4863 !important;
    border-color: #2f4863 !important;
}

.btn-outline-primary, .btn-outline-primary:hover {
    border-color: #2f4863 !important;
    color:#2f4863 !important;
    background-color: azure;
}
</style>

<style scoped>
.login-register {
    background-color: #2f4863;
}

.form-group {
    position: relative;
}

.form-group input {
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    color: azure;

    min-height: 50px;
    font-size: 25px;
    letter-spacing: 0.1ch;
    z-index: 20;
}

.form-group #input-field-label {
    position: absolute;
    left: 0;
    top: 0;
    padding: 15px;
    transition: 0.3s;
    pointer-events: none;
}
.form-group input:valid ~ #input-field-label,
.form-group input:focus ~ #input-field-label {
    color: #344c64;
    transform: translate(-20px, -37px) scale(0.8);
}

.form-group #input-field-underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color:#2f4863;
    border-radius: 4px;
    transition: 0.3s;
    pointer-events: none;
    z-index: 1;
}

.form-group input:focus ~ #input-field-underline,
.form-group input:valid ~ #input-field-underline {
    height: 50px;
}

#login-btn:hover {
    transition: 0.3s;
    transform: scale(1.05);
}

#login-btn-container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size:25px; 

    height: 50px;
    padding-left: 35px;

    transition: 0.3s;
}

#login-btn-container:hover {
    transform: translateX(-15px);
}

#login-btn-container #login-btn-img {

    height: 20px;

    transform: translateX(10px);
}

#login-btn-container #login-btn-overlay {
    
    height: 20px;
    width: 20px;

    transform: translateX(-10px);

    transition: 0.3s;
    background-color: #2f4863;
}

#login-btn-container:hover #login-btn-overlay {
    transform: translateX(10px);
}


#register-btn:hover {
    transition: 0.3s;
    transform: scale(1.05);
}
</style>
