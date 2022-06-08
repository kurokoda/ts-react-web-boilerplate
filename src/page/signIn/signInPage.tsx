import { TextButton } from "../../component";
import { UserSignUpData } from "../../type";

type HomePageProps = {
  onSignInButtonClick: (signUpData: UserSignUpData) => void;
};

const SignInPage = ({ onSignInButtonClick }: HomePageProps) => {
  return (
    <>
      <div>SIGN IN</div>
      <TextButton
        label="Sign In User"
        onClick={() =>
          onSignInButtonClick({
            email: "indigo.developer@gmail.com",
            password: "Password",
          })
        }
      />
    </>
  );
};

export { SignInPage };
