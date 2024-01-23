import { useState } from "react"
import { Link } from "react-router-dom"
import {  signInWithEmailAndPassword, signInWithPopup   } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import '../../components/Styles.css'
import assetLogIn from '../../assets/assetLogIn.jpg'
import loginDesign from '../../assets/loginDesign.png'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => {
      const user = userCredential.user;
      Navigate(" ")
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  const signInWithGoogle = () => {
    // Sign in with Google using Firebase's signInWithPopup method
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(" ");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  
  return (
    <>
    <div className="split left">
      <div className="centered">
        
        <h2>Jane Flex</h2>
        <p>Some text.</p>
      </div>
    </div>

    
    <div className="split right">
      <div className="centered">

      </div>
    </div>



  </>
  )
}

export default LogIn