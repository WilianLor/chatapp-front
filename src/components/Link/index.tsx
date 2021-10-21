import { LinkComponent } from "./styles";

import LinkPropsInterface from "./types";

const Link = ({ text, ...rest }: LinkPropsInterface) => {
  return <LinkComponent {...rest}>{text}</LinkComponent>;
};

export default Link;
