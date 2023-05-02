import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAnL82-VizUBl0s0MUVjgcmF00hId1JpDA",
  authDomain: "whatsapp-clone-b00eb.firebaseapp.com",
  projectId: "whatsapp-clone-b00eb",
  storageBucket: "whatsapp-clone-b00eb.appspot.com",
  messagingSenderId: "880334146065",
  appId: "1:880334146065:web:a670e77b9fb11d5e6c7fb0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const storage= firebase.storage()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {storage, auth, provider };
export default db;
