import { IconRegular } from ".";

export default {
  title: "Components/IconRegular",
  component: IconRegular,
  argTypes: {
    stateProp: {
      options: ["hover", "normal"],
      control: { type: "select" },
    },
    size: {
      options: ["regular", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    size: "regular",
    className: {},
  },
};
