import { initializeApp }from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut ,setPersistence,browserSessionPersistence} from "firebase/auth"

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signIn.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var LoginStatus = "Logged in"

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      var dt = Date();
      update(ref(database, 'Users in the system/' + user.uid), {
        LoginTime: dt,
        LoginStatus: LoginStatus,
        email: email
      })

      
      window.location.href = '../homepageWithLogin/homepageWithLogin.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });

});



update1.addEventListener('click', (e) => {
  // console.log("123");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      alert("Updated credits")
      update(ref(database, 'All users in database/' + user.uid), {
        TotalCredits: "updated credits"
        // extract from another page
      })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});


update2.addEventListener('click', (e) => {


  //record before signing off
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      update(ref(database, 'Users in the system/' + user.uid), {
        LoginStatus:"Logged Off",
        LoginTime:"NIL"
      })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  signOut(auth).then(() => {
    // Sign-out successful.
    alert("signed out")
  }).catch((error) => {
    // An error happened.
  });

});


update3.addEventListener('click', (e) => {
  // console.log("123");
  var eth = document.getElementById().value;
  var btc = 0;
  var bnb = 0;
  var doge = 0;
  var sol = 0;
  var ada = 0;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      alert("Coins Updated")
      update(ref(database, 'All users in database/' + user.uid), {
        Eth: eth,
        Btc: btc,
        Bnb: bnb,
        Doge: doge,
        Sol: sol,
        Ada: ada,

        // extract from another page
      })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});



// var LoginStatus = "Logged Out";
// var LoginTime = "NIL";
// update(ref(database, 'Users in the system/' + user.uid), {
//   LoginTime: LoginTime,
//   LoginStatus: LoginStatus,
// })