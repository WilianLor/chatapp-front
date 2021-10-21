import { ComponentPropsWithoutRef } from "react";

export default interface ButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  styleType: "filled" | "outlined" | "colored";
  color?: string;
  text: string;
}
