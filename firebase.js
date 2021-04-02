import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1d-37HOxTmVsWTST-EW48-uUGZAGeZkI",
    authDomain: "signal-clone-yt-e74c5.firebaseapp.com",
    projectId: "signal-clone-yt-e74c5",
    storageBucket: "signal-clone-yt-e74c5.appspot.com",
    messagingSenderId: "879671701421",
    appId: "1:879671701421:web:bc2f613346f120c4ae7b24"
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };