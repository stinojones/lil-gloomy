// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZYg4kgA1T8fGOiZSe1e_imONw--3XHec",
    authDomain: "lil-gloomy.firebaseapp.com",
    databaseURL: "https://lil-gloomy-default-rtdb.firebaseio.com",
    projectId: "lil-gloomy",
    storageBucket: "lil-gloomy.appspot.com",
    messagingSenderId: "348560822643",
    appId: "1:348560822643:web:ed70422cf06ac79aa33506",
    measurementId: "G-YDZ860PXK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};