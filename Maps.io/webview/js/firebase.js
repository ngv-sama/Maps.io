// When hosting on Netlify, remember to authorize the domain for FireBase in settings
// or else it will not work

const firebaseConfig = {
    apiKey: "AIzaSyDEog_bN1_GzGo_US97f6jIr09BrvqQmd0",
    authDomain: "epic-map-impact.firebaseapp.com",
    databaseURL: "https://epic-map-impact-default-rtdb.firebaseio.com",
    projectId: "epic-map-impact",
    storageBucket: "epic-map-impact.appspot.com",
    messagingSenderId: "898965752214",
    appId: "1:898965752214:web:3d11aaffecbdfd49f975b7",
    measurementId: "G-TRFZRZLTM3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();