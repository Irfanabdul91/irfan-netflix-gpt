import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, User_Avatar } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // user signin /user signup
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = ()=>{
   //toggle gpt search
   dispatch(toggleGptSearchView())


  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))

  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      
      <img className="w-44 mx-auto md:mx-0 " alt="Netflix Logo" src={LOGO} />

      <div>
        {user && (
          <div className="flex p-2 justify-between">
            {/* language selection */}
            {showGptSearch && (<select className="p-2 mx-2  bg-gray-900 text-white font-mono" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}

            </select>)}
            {/* chat gpt serach button */}
            <button onClick={handleGptSearchClick} className="py-2 px-4 bg-red-700 text-white rounded-lg font-mono">{showGptSearch ? "Home Page" : "GPT Serach"}</button>
            <img className="hidden md:block w-10 h-10" alt="User Logo" src={User_Avatar} />
            <button className="font-bold text-white" onClick={handleSignOut}>
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
