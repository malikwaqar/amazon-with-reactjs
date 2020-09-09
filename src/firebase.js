import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDr1Mmw5PmESIlOxmoQqtsbb3kpDKlcpH8",
    authDomain: "with-reactjs.firebaseapp.com",
    databaseURL: "https://with-reactjs.firebaseio.com",
    projectId: "with-reactjs",
    storageBucket: "with-reactjs.appspot.com",
    messagingSenderId: "25720413418",
    appId: "1:25720413418:web:44303c8448ab4b29dbcb93",
    measurementId: "G-R9BGNZYRPT"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };