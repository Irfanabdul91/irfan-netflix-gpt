import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { User_Avatar } from "../utils/constants";
import { BG_URL } from "../utils/constants";

const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);
   //error check
   const [errorMessage, setErrorMessage] = useState(null);

   
   const dispatch = useDispatch();
   //use ref for referenceing the input boxes
   const name = useRef(null);
   const email = useRef(null);
   const password = useRef(null);



   const toggleSignInForm =()=>{
      setIsSignInForm(!isSignInForm)
   }
   const handleButtonClick= ()=>{
      //validate the form data
   
      // console.log(email.current.value)
      // console.log(password.current.value)

      const message = checkValidData(email.current.value, password.current.value)
      // console.log(message)

      setErrorMessage(message)

     
      if(message) return;

       //signin/signup logic 
       if(!isSignInForm){
         //SignUp logic
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.user, {
      displayName: name.current.value, photoURL: User_Avatar
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
    
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorCode + '-' + errorMessage);
    setErrorMessage(errorCode + '-' + errorMessage);
  });

       }

       else{
         //SignIn logic
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorCode + '-' + errorMessage);
    setErrorMessage(errorCode + '-' + errorMessage);
  });

       }


   }

   return (
   <div>
      <Header />
      <div className="absolute">
      <img className="h-screen object-cover" alt="Background Logo" src = {BG_URL} />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-full md:w-4/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSignInForm? 'Sign In':'Sign Up'}</h1>

         {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-gray-800" />}

         <input ref={email} type='text' placeholder='Email Address' className="p-4 my-4 w-full bg-gray-800" />

         <input ref={password} type='password' placeholder='Password' className="p-4 my-4 w-full bg-gray-800" />
         <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

         <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? 'Sign In':'Sign Up'}</button>

         <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? 'New to Netflix? Sign up now.' : 'Already Registred Sign In Now'}</p>
      </form>
   </div>
   );
};

export default Login;
