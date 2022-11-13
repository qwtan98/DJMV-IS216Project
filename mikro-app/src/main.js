import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import router from './router/router'


// import VueAxios from 'vue-axios'
/* import the fontawesome core */

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBook, faGlobe, faTrophy, faGraduationCap, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBook, faGlobe, faTrophy, faGraduationCap, faCaretLeft)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')


import "bootstrap/dist/js/bootstrap.js";

import { initializeApp }from "firebase/app";
// import { getDatabase, ref } from "firebase/database";
import { getDatabase, ref } from "firebase/database";
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut ,setPersistence,browserSessionPersistence} from "firebase/auth"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBqxHtE4yZbgxMaCY0QHV7j8E412OkNjHs",
  authDomain: "djmv-is216project.firebaseapp.com",
  projectId: "djmv-is216project",
  storageBucket: "djmv-is216project.appspot.com",
  messagingSenderId: "872537705550",
  appId: "1:872537705550:web:1111aa58b1e0eece0bc71f",
  measurementId: "G-KFK66MB8EG",
  databaseURL: "https://djmv-is216project-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { database, auth, app, ref }
// document.getElementById("databasetesting").addEventListener('click', (e) => {
//       console.log("test")
    //   var email = document.getElementById('email').value;
    //   var password = document.getElementById('password').value;
    //   var LoginStatus = "Logged in"
    
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    
    //       var dt = Date();
    //       update(ref(database, 'Users in the system/' + user.uid), {
    //         LoginTime: dt,
    //         LoginStatus: LoginStatus,
    //         email: email
    //       })
    
          
    //       window.location.href = '../homepageWithLogin/homepageWithLogin.html';
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    
    //       alert(errorMessage);
    //     });
// });