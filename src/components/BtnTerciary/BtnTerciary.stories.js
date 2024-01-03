import { BtnTerciary } from ".";

export default {
  title: "Components/BtnTerciary",
  component: BtnTerciary,
  argTypes: {
    stateProp: {
      options: ["hover", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "Label",
    stateProp: "hover",
    className: {},
  },
};
