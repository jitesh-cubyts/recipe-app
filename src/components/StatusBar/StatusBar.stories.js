import { StatusBar } from ".";

export default {
  title: "Components/StatusBar",
  component: StatusBar,
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
    wiFi: "/img/wi-fi.svg",
  },
};
