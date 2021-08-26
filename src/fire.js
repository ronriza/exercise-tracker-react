import firebase from 'firebase/app';

import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDHZODaQPsJIK2tfqHuSZ0-tH5oxozyUnA",
    authDomain: "exercise-tracker-effea.firebaseapp.com",
    projectId: "exercise-tracker-effea",
    storageBucket: "exercise-tracker-effea.appspot.com",
    messagingSenderId: "979502751935",
    appId: "1:979502751935:web:ddffa1f92fa5248e0ea60a"
};

try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {
    console.error('Firebase initialization error', err.stack)
}

const fire = firebase
export default fire