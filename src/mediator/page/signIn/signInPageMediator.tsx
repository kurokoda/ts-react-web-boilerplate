import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";

import { SignInPage } from "../../../page/signIn/signInPage";
import { UserSignUpData } from "../../../type";

const SignInPageMediator = () => {
  const auth = getAuth();

  const signInUser = (createUserData: UserSignUpData) => {
    const { email, password } = createUserData;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Ian signInUser SUCCESS", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Ian signInUser ERROR", errorCode, errorMessage);
      });
  };

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
