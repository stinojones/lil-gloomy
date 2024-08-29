import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { auth, db } from "./firebase-config.js"
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js';

const provider = new GoogleAuthProvider();

async function signIn() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Reference to the user document in Firestore
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        let nickname;
        if (userDoc.exists()) {
            // If user document exists, use the stored nickname
            const userData = userDoc.data();
            nickname = userData.nickname;
        } else {
            // If user document does not exist, prompt for nickname and save it
            nickname = prompt('Enter your nickname:');
            await setDoc(userDocRef, { nickname: nickname });
        }

        // Update UI
        document.getElementById('whenSignedOut').hidden = true;
        document.getElementById('whenSignedIn').hidden = false;
        document.getElementById('userDetails').innerText = `Hello, ${nickname}`;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
    }
}

function signOutUser() {
    signOut(auth).then(() => {
        document.getElementById('whenSignedOut').hidden = false;
        document.getElementById('whenSignedIn').hidden = true;
        document.getElementById('userDetails').innerText = '';
    }).catch(() => {
        console.error(`Sign Out error: ${error.message}`)
    });
}

// Handle DOMContentLoaded event to set up event listeners
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('signInBtn').addEventListener('click', signIn);
    document.getElementById('signOutBtn').addEventListener('click', signOutUser);

    // Check auth state on page load
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            document.getElementById('whenSignedOut').hidden = true;
            document.getElementById('whenSignedIn').hidden = false;
            document.getElementById('userDetails').innerText = `Hello, ${user.displayName}`;
        } else {
            // No user is signed in
            document.getElementById('whenSignedOut').hidden = false;
            document.getElementById('whenSignedIn').hidden = true;
            document.getElementById('userDetails').innerText = '';
        }
    });
});