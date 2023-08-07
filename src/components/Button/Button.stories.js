import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "text", "secondary"],
      control: { type: "select" },
    },
    state: {
      options: ["pressed", "disable", "default"],
      control: { type: "select" },
    },
    property: {
      options: ["icon-only", "no-icon", "with-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    type: "primary",
    state: "pressed",
    property: "icon-only",
    className: {},
    labelClassName: {},
    text: "Placeholder",
    iconGeneralArrowUnion: "/img/union-35.svg",
  },
};
