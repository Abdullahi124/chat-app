 import firebase from 'firebase'
 
 const firebaseConfig = {
    apiKey: "AIzaSyDKJBI3SY-S0BOItx_tHxSyp9ln3K-QMdc",
    authDomain: "chatapp-2e52d.firebaseapp.com",
    databaseURL: "https://chatapp-2e52d.firebaseio.com",
    projectId: "chatapp-2e52d",
    storageBucket: "chatapp-2e52d.appspot.com",
    messagingSenderId: "507014166313",
    appId: "1:507014166313:web:f5f04ed788df0c9c22e938",
    measurementId: "G-EPR9DG46QH"
  };

  export const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();

  const provider=new firebase.auth.GoogleAuthProvider();
 

  export {auth,provider}

  export default db;