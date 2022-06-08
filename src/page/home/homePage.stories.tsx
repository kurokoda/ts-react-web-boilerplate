// TODO Improve story variation

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomePage } from "./homePage";

export default {
  title: "page/home/homePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => (
  <HomePage
    firestoreTestData={{}}
    onModalButtonClick={() => console.log("onModalButtonClick")}
  />
);

export const Primary = Template.bind({});
