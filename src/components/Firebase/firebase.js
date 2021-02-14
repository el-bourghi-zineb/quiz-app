import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDJj5XGjLvv6SpmZTyZA10koPnf3YdB86k",
    authDomain: "quiz-app-852c8.firebaseapp.com",
    projectId: "quiz-app-852c8",
    storageBucket: "quiz-app-852c8.appspot.com",
    messagingSenderId: "498068976413",
    appId: "1:498068976413:web:6b0770e41dbbace33667f4"
  };

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db=app.firestore();
    }

    //Inscription
     signupUser = (email, password) => 
     this.auth.createUserWithEmailAndPassword(email, password);

     //Connexion
     loginUser = (email, password) =>
     this.auth.signInWithEmailAndPassword(email, password);

     //Logout
     logoutUser = () =>
     this.auth.signOut()

     //Recuperer le mot de passe
     passwordReset = (email)=> this.auth.sendPasswordResetEmail(email);

     user = uid => this.db.doc(`users/${uid}`);

    }

export default Firebase; 