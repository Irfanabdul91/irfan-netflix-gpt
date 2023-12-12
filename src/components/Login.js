import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);
   const toggleSignInForm =()=>{
      setIsSignInForm(!isSignInForm)
}

   return (
   <div>
      <Header />
      <div className="absolute">
      <img alt="Background Logo" src = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="absolute w-4/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSignInForm? 'Sign In':'Sign Up'}</h1>

         {!isSignInForm && <input type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-gray-800" />}

         <input type='text' placeholder='Email Address' className="p-4 my-4 w-full bg-gray-800" />

         <input type='password' placeholder='Password' className="p-4 my-4 w-full bg-gray-800" />

         <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? 'Sign In':'Sign Up'}</button>

         <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? 'New to Netflix? Sign up now.' : 'Already Registred Sign In Now'}</p>
      </form>
   </div>
   );
};

export default Login;
