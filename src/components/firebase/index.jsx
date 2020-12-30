import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAFiArBZSwzqFDSydC74_S8OJFyeD3Og0I",
  authDomain: "ionic-react-chat-1ce54.firebaseapp.com",
  projectId: "ionic-react-chat-1ce54",
  storageBucket: "ionic-react-chat-1ce54.appspot.com",
  messagingSenderId: "47715108525",
  appId: "1:47715108525:web:a0ab04214fea0d898d2824",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
