<template>
    <div class="login-register">
        
        <!-- <NavigationBar></NavigationBar> -->

        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div id="sign-up-card" class="card col-md-6 mx-auto rounded-0" style="width:540px">
                    <img class="card-img-top mx-auto" src="../assets/ui/mikro_logo_trim.png" alt="mikro logo" style="max-width:250px; padding:50px"> 
                    
                    <div class="card-body">
                        <form>
                            <div id="login_inputfields" class="form-group mt-2">
                                <input type="text" class="form-control rounded-0" autofocus="autofocus" maxlength="25" id="loginInputUID" required="required">
                                <!-- <label for="loginInputUID" class="lead">User ID</label> -->
                                <span>User ID</span>
                                <i></i>
                            </div>

                            <div id="login_inputfields" class="form-group mt-4">
                                <!-- <label for="loginInputPW" class="lead">Password</label> -->
                                <input type="password" class="form-control rounded-0" id="loginInputPW" required="required">
                                <span>Password</span>
                                <i></i>
                            </div>
                        </form>

                        <div>
                            <router-link to="/">
                                <button class="btn btn-primary w-100 mt-5" style="font-size:25px; height: 65px;">
                                    Log in
                                    <img id="" src="../assets/ui/enter-icon.png" alt="" style="width:30px">
                                </button>
                            </router-link>
                        </div>

                        <div>
                            <router-link to="/">
                                <button class="btn btn-outline-primary w-100 mt-3" style="font-size:25px; height: 65px;">
                                    Register
                                </button>
                            </router-link>
                        </div>

                        <div class ="d-flex justify-content-start mt-3" style="font-size:20px;">
                            <router-link to="/">
                                Forgot your User ID or Password?
                            </router-link>
                        </div>
                    </div>
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
#sign-up-card {
    margin: 50px 0px 50px 0px;
    padding: 20px 30px 80px 30px;
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
    background-color: white;
}
</style>

<style scoped>
.form-group {
    position: relative;
}

.form-group input {
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    min-height: 50px;
    color: white;
    z-index: 20;
}

.form-group span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 15px;
    transition: 0.3s;
    pointer-events: none;
}
.form-group input:valid ~ span,
.form-group input:focus ~ span {
    color: #2f4863;
    transform: translate(-20px, -37px) scale(0.8);
}

.form-group i {
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

.form-group input:focus ~ i,
.form-group input:valid ~ i {
    height: 50px;
}



/* .form-group label {
    top: 0;
    left: 0;
    transform: translate(15px, 40px);
    transform-origin: left;
    transition: transform .25s;
}
.form-group:focus-within label {
    transform: translate(0px, -5px) scale(.85);
    color: black;
} */
</style>