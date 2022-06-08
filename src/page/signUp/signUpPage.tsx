import { Helmet } from "react-helmet-async";

import { TextButton } from "../../component";
import { UserSignUpData } from "../../type";

type HomePageProps = {
  onSignUpButtonClick: (signUpData: UserSignUpData) => void;
};

const SignUpPage = ({ onSignUpButtonClick }: HomePageProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* TODO replace with constants */}
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
