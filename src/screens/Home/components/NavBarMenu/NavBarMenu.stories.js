import { NavBarMenu } from ".";

export default {
  title: "Components/NavBarMenu",
  component: NavBarMenu,
  argTypes: {
    state: {
      options: ["active", "inactive", "create"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    className: {},
  },
};
