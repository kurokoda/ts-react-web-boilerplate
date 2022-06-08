import { SignInForm } from "../../component/form/signIn/signIn";
import { AuthRequestData } from "../../type";

type HomePageProps = {
  onSignInButtonClick: (signUpData: AuthRequestData) => void;
};

const SignInPage = ({ onSignInButtonClick }: HomePageProps) => {
  return (
    <>
      <div>SIGN IN</div>
      <SignInForm onSubmit={onSignInButtonClick} />
    </>
  );
};

export { SignInPage };
