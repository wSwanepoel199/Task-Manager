"use client";
import React, { useEffect, useState } from "react";
import {
  signInWithGoogle,
  onAuthStateChanged,
  signOut,
} from "@/utils/firebase/auth";
import { useRouter } from "next/navigation";

function useUserSession(initialUser: Object) {
  const [user, setUser] = useState(initialUser);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (user === undefined) return;
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [user]);
  return user;
}

const Signin = ({ initialUser }: { initialUser: Object }) => {
  const user = useUserSession(initialUser);
  const handleSignIn = (event: Event) => {
    event.preventDefault();
    console.log("signing in with google");
    signInWithGoogle();
  };

  const handleSignOut = (event: Event) => {
    event.preventDefault();
    console.log("signing out of google");
    signOut();
  };

  return (
    <div>
      Signin
      <div className="flex flex-col">
        <button onClick={() => handleSignIn}>SignInWithGoogle</button>
        <button onClick={() => handleSignOut}>SignOut</button>
      </div>
    </div>
  );
};

export default Signin;
