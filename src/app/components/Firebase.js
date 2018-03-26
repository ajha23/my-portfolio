import * as firebase from "firebase"

const config = {
    apiKey: "AIzaSyCNFQWn4LqpwTxLgQXZEEsdvJwdin6pKK8",
    authDomain: "my-portfolio-23.firebaseapp.com",
    databaseURL: "https://my-portfolio-23.firebaseio.com",
    projectId: "my-portfolio-23",
    storageBucket: "my-portfolio-23.appspot.com",
    messagingSenderId: "574841557509"
};
firebase.initializeApp(config)
let Database = firebase.database()

export default Database