// TODO Improve story variation

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextButton } from "./textButton";

export default {
  title: "component/textButton",
  component: TextButton,
  argTypes: {
    disabled: { control: "disabled" },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
  label: "Button",
};
