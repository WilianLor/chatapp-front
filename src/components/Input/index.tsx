import { InputComponent } from "./styles";
import { ComponentPropsWithoutRef } from "react";

const Input = ({ ...rest }: ComponentPropsWithoutRef<"input">) => {
  return <InputComponent {...rest} />;
};

export default Input;
