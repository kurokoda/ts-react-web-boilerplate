import {
  getAuth,
  signInWithEmailAndPassword,
  User as AuthUser,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useFirestore } from "reactfire";

import { SignInPage } from "../../../page/signIn/signInPage";
import { setUser, userSelector } from "../../../state";
import { AuthRequestData } from "../../../type";

const SignInPageMediator = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>();

  const auth = getAuth();

  const user = useSelector(userSelector)

  const dispatch = useDispatch();
  const firestoreInstance = useFirestore();

  useEffect(() => {
    const fetchRemoteUserData = async (uid: string) => {
      const userRef = doc(firestoreInstance, "user", uid);
      const userDoc = await getDoc(userRef);
      const user = userDoc.data();
      dispatch(setUser(user));
    };

    if (authUser) {
      fetchRemoteUserData(authUser.uid);
    }
  }, [authUser, dispatch, firestoreInstance]);

  const signInUser = (createUserData: AuthRequestData) => {
    const { email, password } = createUserData;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newAuthUser: AuthUser = userCredential.user;
        setAuthUser(newAuthUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("ERROR", errorCode, errorMessage);
      });
  };

  if(user){
    return <Navigate to="/" />
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* TODO replace with constants */}
        <title>Sign In</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SignInPage onSignInButtonClick={signInUser} />
    </>
  );
};

export { SignInPageMediator };
