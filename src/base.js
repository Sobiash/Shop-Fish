import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCiIlmYgjUVKgryzU2DzXqfpxs9vQCEHgw",
  authDomain: "fish-shop-31ae8.firebaseapp.com",
  databaseURL: "https://fish-shop-31ae8.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
