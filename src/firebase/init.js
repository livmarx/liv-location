import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCswpYI81FGgdDdtfY6kfhIQVl6DZwIUIQ',
  authDomain: 'liv-location.firebaseapp.com',
  databaseURL: 'https://liv-location.firebaseio.com',
  projectId: 'liv-location',
  storageBucket: 'liv-location.appspot.com',
  messagingSenderId: '598276956867',
  appId: '1:598276956867:web:2c1bde52e65224a7',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
