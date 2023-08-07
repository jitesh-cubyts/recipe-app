import { Field } from ".";

export default {
  title: "Components/Field",
  component: Field,
  argTypes: {
    size: {
      options: ["large"],
      control: { type: "select" },
    },
    type: {
      options: ["primary"],
      control: { type: "select" },
    },
    state: {
      options: ["filled-focus", "default", "filled", "focus", "disable"],
      control: { type: "select" },
    },
    properties: {
      options: ["no-icon", "with-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    type: "primary",
    state: "filled-focus",
    properties: "no-icon",
    className: {},
    iconGeneralSearchIconGeneralSearch: "/img/icon-general-search-3.svg",
    text: "Placeholder",
  },
};
