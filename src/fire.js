import firebase from 'firebase';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmvOnyVkRNAPh5SJHh8WxjtkwBOoAHKiU",
    authDomain: "fire-chat-app-8b28e.firebaseapp.com",
    databaseURL: "https://fire-chat-app-8b28e.firebaseio.com",
    projectId: "fire-chat-app-8b28e",
    storageBucket: "",
    messagingSenderId: "719411929682"
  };
  var fire = firebase.initializeApp(config);
export default fire;