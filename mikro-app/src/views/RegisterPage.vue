<template>

        <div class="register container align-items-center justify-content-center ">
            <div class="row transition">
                <div id="register-card" class="card col-md-6 w-100mx-auto rounded-0" style="">
                    <span id="card-outline" style="height:4px"></span>
                    <img class="card-img-top mx-auto" src="../assets/ui/mikro_logo_trim.png" alt="mikro logo" style="max-width:250px;padding:50px">

                    <div class="card-body">
                        <form>
                            <div id="register_email" class="form-group" style="width: 100%;">
                                <input type="text" class="form-control rounded-0" autofocus="autofocus" maxlength="25" id="registerInputUID" required="required" v-model="myemail">
                                <span id="input-field-label">Email</span>
                                <span id="input-field-underline"></span>
                            </div>

                            <div id="register_name" class="form-group mt-5" style="width: 100%;">
                                <input type="text" class="form-control rounded-0" id="registerInputName" required="required" v-model="myname">
                                <span id="input-field-label">Name</span>
                                <span id="input-field-underline"></span>
                            </div>

                            <div id="register_password" class="form-group mt-5" style="width: 100%;">
                                <input type="password" class="form-control rounded-0" autofocus="autofocus" maxlength="25" id="registerPasswordUID" required="required" v-model="mypw">
                                <span id="input-field-label">Password</span>
                                <span id="input-field-underline"></span>
                            </div>

                            <div id="register_confirmpassword" class="form-group mt-5" style="width: 100%;">
                                <input type="password" class="form-control rounded-0" id="registerInputConfirmPW" required="required" v-model="mysecondpw">
                                <span id="input-field-label">Confirm Password</span>
                                <span id="input-field-underline"></span>
                            </div>

                        </form>

                        <div>
                            <button id="register-btn" class="btn btn-primary w-100 mt-5" @click="register">
                                <div id="register-btn-container" >
                                    <span style="font-size:large">Register</span>
                                    <img id="register-btn-img" src="../assets/ui/enter-icon.png" alt=""><div id="register-btn-overlay"></div>
                                </div>
                            </button>
                        </div>

                        <div class="d-flex justify-content-start mt-3" style="font-size: 14px">
                            Already have an account?&nbsp; 
                            <router-link to="Login">
                                 Sign in here
                            </router-link>
                        </div>
                    </div>

                    <span id="card-outline" class=" " style="height:4px"></span>
                </div>
            </div>
        </div>
  </template>

<script setup>

</script>
<script>
    import { useRouter } from 'vue-router'
    import { ref, child, get, set } from "firebase/database"
    import { database, auth } from "../main.js"
    import { createUserWithEmailAndPassword } from "firebase/auth"

    export default 
    {
        name: 'RegisterPage',
        props: 
        {
    
        },
        data() 
        {
            return {
                myemail: "",
                mypw: "",
                myname: "",
                mysecondpw: "",

                router: useRouter()
            }
        },
        methods: 
        {
            register() {
                if (this.mypw != this.mysecondpw) {
                    console.log("Confirmation password not the same")

                    this.myemail = "";
                    this.mypw = "";
                    this.myname = "";
                    this. mysecondpw = "";

                    return;
                }
                createUserWithEmailAndPassword(auth, this.myemail, this.mypw)
                .then((data) => {
                    console.log("Success!", data);

                    set(ref(database, 'users/' + auth.currentUser.uid), {
                        email: this.myemail,
                        name: this.myname,
                    });

                    get(child(ref(database), `achievements/`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            let achievements_badges = {}

                            for (const [id, value] of Object.entries(snapshot.val())) {

                                console.log(id === 0)

                                achievements_badges[value.aid] = 0
                                set(ref(database, 'users/' + auth.currentUser.uid + '/achievements_badges/'), {
                                    ongoing: achievements_badges
                                });
                            }

                            this.router.push('/login')
                            
                        } else {
                            console.log("No data available");
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
                })
                .catch((e) => {
                    console.log(e.code);
                });
            }
        }
    }
</script>

<style>

.transition {
    padding-left:25px;
    width:100%;
}

#register-card {
    padding: 40px 30px 60px 30px;
    margin: 0px 0 50px 0;
    outline: none;
    border: none;
    background-color: aliceblue;
    box-shadow: rgba(121, 121, 121, 0.988) 3px 7px 29px 3px;
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
    background-color: aliceblue;
}
</style>

<style scoped>
.register {
    background-color: #2f4863;
    background-image: url(../assets/ui/background.webp);
}

.form-group {
    position: relative;
}

.form-group input {
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    color: aliceblue;

    min-height: 50px;
    font-size: 15px;
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

#register-btn:hover {
    transition: 0.3s;
    transform: scale(1.05);
}

#register-btn-container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size:25px; 

    height: 35px;
    padding-left: 35px;

    transition: 0.3s;
}

#register-btn-container:hover {
    transform: translateX(-15px);
}

#register-btn-container #register-btn-img {

height: 20px;

transform: translateX(10px);
}

#register-btn-container #register-btn-overlay {
    
    height: 20px;
    width: 20px;

    transform: translateX(-10px);

    transition: 0.3s;
    background-color: #2f4863;
}

#register-btn-container:hover #register-btn-overlay {
    transform: translateX(10px);
}

#register-btn:hover {
    transition: 0.3s;
    transform: scale(1.05);
}
</style>
