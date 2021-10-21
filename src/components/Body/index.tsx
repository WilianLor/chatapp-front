import { BodyContainer } from "./styles";
import BodyProps from "./types";

const Body = ({ children }: BodyProps) => {
  return (
    <BodyContainer>
      {children}
    </BodyContainer>
  );
};

export default Body;
