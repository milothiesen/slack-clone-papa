// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBB0VBE2LThvVNQxGPQyNflPJyA2aGezS4',
    authDomain: 'slack-clone-papa.firebaseapp.com',
    projectId: 'slack-clone-papa',
    storageBucket: 'slack-clone-papa.appspot.com',
    messagingSenderId: '1002808924890',
    appId: '1:1002808924890:web:84f4a72028ca2472a1a3e3',
    measurementId: 'G-M3CJFGE5YG',
};

// connects the front end to the firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

// refers to the cloud firesotre db in the firebase dashboard/console
const db = firebaseApp.firestore();
// define the auth
const auth = firebase.auth();
// firebase.auth().useDeviceLanguage();

// add google auth
const provider = new firebase.auth.GoogleAuthProvider();

// export to access these from other parts of the app. now we can access auth, google auth, and the db
export { auth, provider, db };
