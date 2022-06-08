import { Helmet } from "react-helmet-async";

import { TextButton } from "../../component";
import { UserSignUpData } from "../../type";

type HomePageProps = {
  onSignInButtonClick: (signUpData: UserSignUpData) => void;
};

const SignInPage = ({ onSignInButtonClick }: HomePageProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* TODO replace with constants */}
        <title>Sign In</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
