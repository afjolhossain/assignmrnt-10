import { useEffect, useState } from "react";
import initiliazeAuthentication from "../pages/Login/firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

// -------initiliazeFirebase-------
initiliazeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setauthError] = useState("");

  const googlrProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const auth = getAuth();

  // register Authentication
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   onAuthStateChanged means observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //   signOut
  const LogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  // ****************************
  //          Sign in Google
  // *****************************

  const signInGoogle = () => {
    signInWithPopup(auth, googlrProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setauthError(error.message);
      });
  };

  // ****************************
  //          Sign in FaceBook
  // *****************************

  const signInFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setauthError(error.message);
      });
  };

  return {
    user,
    isLoading,
    authError,
    registerUser,
    signInGoogle,
    signInFacebook,
    loginUser,
    LogOut,
  };
};
export default useFirebase;
