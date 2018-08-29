import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBfyIuBfvntD3DQSn11idAynU6VN6VsyX4",
  authDomain: "reddit-clone-ca883.firebaseapp.com",
  databaseURL: "https://reddit-clone-ca883.firebaseio.com",
  projectId: "reddit-clone-ca883",
  storageBucket: "reddit-clone-ca883.appspot.com",
  messagingSenderId: "1066692489050"
};

firebase.initializeApp(config);

export default firebase;
