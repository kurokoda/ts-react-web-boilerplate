import { Routes, Route } from "react-router-dom";

import { AuthLayout, MessageCard } from "../../component";
import { HomePageMediator, SignInPageMediator, SignUpPageMediator } from "../../page";

const ApplicationRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<HomePageMediator />} />
        <Route path="about" element={<div>ABOUT</div>} />
      </Route>
      <Route path="signIn" element={<SignInPageMediator />} />
      <Route path="signUp" element={<SignUpPageMediator />} />
      <Route
        path="*"
        element={
          <MessageCard
            icon="error"
            text="This page does not exist"
            title="Oops!"
          />
        }
      />
    </Routes>
  );
};

export { ApplicationRouter };
