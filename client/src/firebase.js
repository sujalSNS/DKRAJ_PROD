// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB31LDfLx6K3Jr6WefrbQLXXEcLLWxTz80",
//   authDomain: "dkraj-jewels.firebaseapp.com",
//   projectId: "dkraj-jewels",
//   storageBucket: "dkraj-jewels.appspot.com",
//   messagingSenderId: "465201746015",
//   appId: "1:465201746015:web:ab905093b88f60b632cbea"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// export { auth, googleProvider, facebookProvider };





import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB31LDfLx6K3Jr6WefrbQLXXEcLLWxTz80",
    authDomain: "dkraj-jewels.firebaseapp.com",
    projectId: "dkraj-jewels",
    storageBucket: "dkraj-jewels.appspot.com",
    messagingSenderId: "465201746015",
    appId: "1:465201746015:web:ab905093b88f60b632cbea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();



export const signInSignUpWithGoogle = async () => {
    try {

        const result = await signInWithPopup(auth, googleProvider);

        const token = await result.user.getIdToken();

        const user = {
            name: result.user.displayName, 
            email: result.user.email
        } ;

        return { user, token };


    } catch (error) {
        console.error("Google Sign In Error:", error.message);
        return null;
    }
}

export const signInSignUpWithFacebook = async () => {
    try {

        const result = await signInWithPopup(auth, facebookProvider);
        
        const token = await result.user.getIdToken();

        const user = {
            name: result.user.displayName, 
            email: result.user.email
        } ;

        return { user, token };


    } catch (error) {
        // Handle errors, such as user cancellation or authentication failure
        console.error("Google Sign In Error:", error.message);
        return null;
    }
}






/*


App not active
This app is not currently accessible and the app developer is aware of the issue. You will be able to log in when the app is reactivated.


*/