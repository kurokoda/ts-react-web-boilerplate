import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";

import { SignUpPage } from "../../../page/signUp/signUpPage";
import { AuthRequestData } from "../../../type";

const SignUpPageMediator = () => {
  const auth = getAuth();

  const signUpUser = (createUserData: AuthRequestData) => {
    const { email, password } = createUserData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Ian signUpUser SUCCESS", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("ERROR", errorCode, errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* TODO replace with constants */}
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SignUpPage onSignUpButtonClick={signUpUser} />
    </>
  );
};

export { SignUpPageMediator };
