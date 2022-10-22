<template>
    <div class="login-register">
        
        <!-- <NavigationBar></NavigationBar> -->

        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div id="sign-up-card" class="card col-md-6 mx-auto rounded-0" style="width:540px">
                    <img class="card-img-top mx-auto" src="../assets/ui/mikro_logo_trim.png" alt="mikro logo" style="max-width:250px; padding:50px"> 
                    
                    <div class="card-body">
                        <form>
                            <div class="form-group mt-2">
                                <label for="loginInputUID" class="lead" style="transform(15px,40px)">User ID</label>
                                <input type="text" class="form-control rounded-0" autofocus="autofocus" maxlength="25" id="loginInputUID" required style="height:50px; font-size:25px;">
                            </div>

                            <div class="form-group mt-4">
                                <label for="loginInputPW" class="lead">Password</label>
                                <input type="password" class="form-control rounded-0" id="loginInputPW" style="height:50px; font-size:25px;">
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
    padding: 20px 20px 80px 20px;
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

.form-group label {
    top: 0;
    left: 0;
    transform: translate(15px, 40px);
    transform-origin: left;
    transition: transform .25s;
}
.form-group:focus-within label {
    transform: translate(0px, -5px) scale(.85);
    color: black;
}
</style>