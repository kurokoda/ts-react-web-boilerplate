import { TextButton } from "../../component";
import { UserSignUpData } from "../../type";

type HomePageProps = {
  onSignUpButtonClick: (signUpData: UserSignUpData) => void;
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
