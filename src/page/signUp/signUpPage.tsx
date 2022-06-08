import { TextButton } from "../../component";
import { AuthRequestData } from "../../type";

type HomePageProps = {
  onSignUpButtonClick: (signUpData: AuthRequestData) => void;
};

const SignUpPage = ({ onSignUpButtonClick }: HomePageProps) => {
  return (
    <>
      <div>SIGN UP</div>
      <TextButton
        label="Sign Up User"
        onClick={() =>
          onSignUpButtonClick({
            email: "indigo.developer@gmail.com",
            password: "Password",
          })
        }
      />
    </>
  );
};

export { SignUpPage };
