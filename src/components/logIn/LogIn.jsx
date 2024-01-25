import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword, signInWithPopup   } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import '../../components/Styles.css'
import Logo from '../../assets/logo.png'
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";
import AdminPanel from "../adminPanel/AdminPanel";
const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/adminPanel")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
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
        navigate("/adminPanel");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <>
    <div className="split left">
    <img
              src={Logo}
              className="h-20 w-auto sm:h-20"
              alt="Flowbite Logo"
            />
      <div className="centered">
        {/* email input */}
          <Input 
          type="email" 
          label="Email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        {/* end */}

        {/* password input */}
          <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button className="focus:outline-none pt-10" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="pt-5" 
        />
        {/* end */}
              <div className="paragph2 pt-10">
              <Button 
              onClick={onLogin}
              color="primary">
                Log In
              </Button>  
              </div> 
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