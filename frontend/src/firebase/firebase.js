import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBJt9nkUpI1xl73z9MVgwHIf2eCt8tTXO0",
    authDomain: "stanled-mono.firebaseapp.com",
    projectId: "stanled-mono",
    storageBucket: "stanled-mono.appspot.com",
    messagingSenderId: "710780200864",
    appId: "1:710780200864:web:6b9b61a496ddd2ab1fe6c5",
    measurementId: "G-PHS3JF6HZ0"
  };

  // Initialize Firebase


  export const initializeFirebase = (function() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  })