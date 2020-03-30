import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Replace this with your own config details
//new config
var config = {
    apiKey: "AIzaSyBBGE44-e01QW2X5lEjXKb37UAdOVW3da4",
    authDomain: "project-manager-68103.firebaseapp.com",
    databaseURL: "https://project-manager-68103.firebaseio.com",
    projectId: "project-manager-68103",
    storageBucket: "project-manager-68103.appspot.com",
    messagingSenderId: "940903053516",
    appId: "1:940903053516:web:f741a2714d17d2ed316a69"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export const AuthInstance= firebase.auth();
export const googleProvider=new firebase.auth.GoogleAuthProvider();

export default firebase;


















//OLD CONFIG
// var firebaseConfig = {
//   apiKey: "AIzaSyBBGE44-e01QW2X5lEjXKb37UAdOVW3da4",
//   authDomain: "project-manager-68103.firebaseapp.com",
//   databaseURL: "https://project-manager-68103.firebaseio.com",
//   projectId: "project-manager-68103",
//   storageBucket: "project-manager-68103.appspot.com",
//   messagingSenderId: "940903053516",
//   appId: "1:940903053516:web:f741a2714d17d2ed316a69"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   //firebase.analytics();
//   firebase.firestore().settings({});

// export default firebase;