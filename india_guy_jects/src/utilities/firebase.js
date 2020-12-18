import firebase from "firebase/app";


import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
      apiKey: "AIzaSyCw7SVtemV8IDuoB38qUhweJS9IvvrlHJ8",
      authDomain: "vue-loginsystem.firebaseapp.com",
      projectId: "vue-loginsystem",
      storageBucket: "vue-loginsystem.appspot.com",
      messagingSenderId: "316498073928",
      appId: "1:316498073928:web:425e386b59fd149fa5bb7d"
};


/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

*/

firebase.initializeApp(firebaseConfig);

export default firebase;