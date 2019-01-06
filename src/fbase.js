import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdnfj1T8FX-dBIWeF6ZVrOLfrsDgtba5I",
    authDomain: "clockwork-bookstore-6e6eb.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-6e6eb.firebaseio.com",
    projectId: "clockwork-bookstore-6e6eb",
    storageBucket: "clockwork-bookstore-6e6eb.appspot.com",
    messagingSenderId: "805953463220"
  });

  const fbase = Rebase.createClass(firebaseApp.database());

  export {firebaseApp, fbase};