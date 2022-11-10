<template>
<div>
  <h1>Firebase is used here!</h1>
</div>
</template>
  
<script>
import { initializeApp }from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqxHtE4yZbgxMaCY0QHV7j8E412OkNjHs",
  authDomain: "djmv-is216project.firebaseapp.com",
  projectId: "djmv-is216project",
  storageBucket: "djmv-is216project.appspot.com",
  messagingSenderId: "872537705550",
  appId: "1:872537705550:web:1111aa58b1e0eece0bc71f",
  measurementId: "G-KFK66MB8EG",
  databaseURL: "https://djmv-is216project-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const myId = "uid1234567890";
const userURL = "/users/" + myId + '/'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase (app);

    export default 
    {
        name: "FirebaseDatabase",

        computed: {
          getAchievements() {
            // const starCountRef = ref(database, userURL + 'achievements/');
            // onValue(starCountRef, (snapshot) => {
            //   const data = snapshot.val();
            // });

            return 'hello!'
          }
        },

        mounted() {
          const starCountRef = ref(database, userURL);
          onValue(starCountRef, (snapshot) => {
             const data = snapshot.val();
             console.log(data)
          });
        }
    }
</script>