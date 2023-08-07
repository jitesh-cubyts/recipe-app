import { HomeIndicator } from ".";

export default {
  title: "Components/HomeIndicator",
  component: HomeIndicator,
  argTypes: {
    property1: {
      options: ["light-mode", "dark-mode"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "light-mode",
    className: {},
  },
};
