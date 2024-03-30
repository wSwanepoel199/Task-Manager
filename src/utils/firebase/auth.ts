import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";

import { auth } from "./firebase";

export const onAuthStateChanged = (cb: NextOrObserver<any>) => {
  return _onAuthStateChanged(auth, cb);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error("Error signing in with Google: ", err);
  }
};

export const signOut = async () => {
  try {
    return auth.signOut();
  } catch (err) {
    console.error("Error signing out with Google: ", err);
  }
};
