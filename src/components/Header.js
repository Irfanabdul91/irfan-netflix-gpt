import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { LOGO, User_Avatar } from "../utils/constants";


const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const user = useSelector(store =>store.user)

   const handleSignOut = ()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')

      }).catch((error) => {
        // An error happened.
        navigate('/error')

      });
   }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           // user signin /user signup
           const {uid, email, displayName, photoURL} = user;
           dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
           navigate("/browse")
         } else {
           // User is signed out
           dispatch(removeUser())
           navigate("/")
         }
       });
       //unsubscribe when component unmounts
       return ()=> unsubscribe();
   },[])

   return (
   <div className="flex absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 justify-between">
      <img className="w-44 " alt="Netflix Logo" src = {LOGO} />

<div>
{user && <div className="flex p-2">
   <img className="w-10 h-10" alt="User Logo" src = {User_Avatar} />
   <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>

</div>}
</div>
   </div>

   
   );
};

export default Header;
