import React from "react";
import Button2 from "./button2";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button2,
  args: {
    children: "Button",
  },
} as ComponentMeta<typeof Button2>;

export const Primary = () => <Button2 variant="primary">Primary</Button2>;
export const Secondary = () => <Button2 variant="secondary">Secondary</Button2>;
export const Success = () => <Button2 variant="success">Success</Button2>;
export const Danger = () => <Button2 variant="danger">Danger</Button2>;

const Template: ComponentStory<typeof Button2> = (args) => (
  <Button2 {...args} />
);

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  // children: 'Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: 'Secondary Args',
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
};
