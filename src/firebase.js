import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBh9rMLMENTYI3T5go4RBRhAeYJu0uqWc",
    authDomain: "react-crud-1d391.firebaseapp.com",
    databaseURL: "https://react-crud-1d391.firebaseio.com",
    projectId: "react-crud-1d391",
    storageBucket: "react-crud-1d391.appspot.com",
    messagingSenderId: "526995591629",
    appId: "1:526995591629:web:1f0169c2a3a9b84dd17484",
    measurementId: "G-G3Z0DP68H7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};