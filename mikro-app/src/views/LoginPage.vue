<template>
    <div class="login-register">
        <!-- <NavigationBar></NavigationBar> -->

        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div id="sign-up-card" class="card col-md-6 mx-auto" style="width:540px">
                    <img class="card-img-top mx-auto" src="../assets/ui/mikro_logo_trim.png" alt="mikro logo" style="width:250px; padding:50px"> 
                    
                    <div class="card-body">
                        <form>
                            <div class="form-group mt-2 d-flex-block justify-content-left">
                                <label for="loginInputUID" class="lead">User ID</label>
                                <input type="text" class="form-control" autofocus="autofocus" id="loginInputUID">
                            </div>

                            <div class="form-group mt-4 d-flex-block justify-content-left">
                                <label for="loginInputPW" class="lead">Password</label>
                                <input type="password" class="form-control" id="loginInputPW">
                            </div>
                        </form>

                        <div>
                            <router-link to="/">
                                <button class="btn btn-dark w-100 mt-5" style="font-size:larger">
                                    Login
                                </button>
                            </router-link>
                        </div>

                        <div>
                            <router-link to="/">
                                <button class="btn btn-outline-dark w-100 mt-2" style="font-size:larger">
                                    Register
                                </button>
                            </router-link>
                        </div>

                        <div class ="d-flex justify-content-start mt-1">
                            <router-link to="/">
                                Forgot your Password?
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
</style>