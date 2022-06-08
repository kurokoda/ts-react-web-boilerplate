// TODO Improve story variation

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SignInPage } from "./signInPage";

export default {
  title: "page/signUp/signUpPage",
  component: SignInPage,
} as ComponentMeta<typeof SignInPage>;

const Template: ComponentStory<typeof SignInPage> = () => (
  <SignInPage onSignInButtonClick={() => console.log("onSignInButtonClick")} />
);

export const Primary = Template.bind({});
