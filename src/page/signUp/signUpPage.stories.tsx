// TODO Improve story variation

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SignUpPage } from "./signUpPage";

export default {
  title: "page/signUp/signUpPage",
  component: SignUpPage,
} as ComponentMeta<typeof SignUpPage>;

const Template: ComponentStory<typeof SignUpPage> = () => (
  <SignUpPage onSignUpButtonClick={() => console.log("onSignUpButtonClick")} />
);

export const Primary = Template.bind({});
