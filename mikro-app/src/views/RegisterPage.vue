<template>
    <div class="login-register">
        <!-- <h1>This is the Register Page.</h1> -->

        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div id="register-card" class="card col-md-6 mx-auto" style="width:540px">
                    <img class="card-img-top mx-auto" src="../assets/ui/mikro_logo_trim.png" alt="mikro logo" style="width:250px; padding: 50px">
                    
                    <div class="card-body">
                        <form>
                            <div class="form-group mt-2 d-flex-block justify-content-left">
                                <label for="registerInputUID" class="lead">User ID</label>
                                <input type="text" class="form-control" autofocus="autofocus" id="registerInputUID">
                            </div>   
                            
                            <div class="form-group mt-4 d-flex-block justify-content-left">
                                <label for="registerInputPW" class="lead">Password</label>
                                <input type="password" class="form-control" id="registerInputPW">
                            </div>
                        </form>

                        <div>
                            <router-link to="/">
                                <button class="btn btn-dark w-100 mt-5" style="font-size:larger">
                                    Create an account
                                </button>
                            </router-link>
                        </div>

                        <div class="d-flex justify-content-start mt-1">
                            <router-link to="Login">
                                Have an account? Login here
                            </router-link>
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
        name: 'RegisterPage',
        props: 
        {
    
        }
    }
</script>

<style>
    #register-card {
        margin: 50px 0px 50px 0px;
        padding: 20px 20px 80px 20px;
    }
</style>