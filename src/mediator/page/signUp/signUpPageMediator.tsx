import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { SignUpPage } from "../../../page/signUp/signUpPage";
import { UserSignUpData } from "../../../type";

const SignUpPageMediator = () => {
  const auth = getAuth();

  const signUpUser = (createUserData: UserSignUpData) => {
    const { email, password } = createUserData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Ian signUpUser SUCCESS", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Ian signUpUser ERROR", errorCode, errorMessage);
      });
  };

  return <SignUpPage onSignUpButtonClick={signUpUser} />;
};

export { SignUpPageMediator };
