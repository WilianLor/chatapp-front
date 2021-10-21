import { HeaderContainer, ContentContainer } from "./styles";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

import { BsFillChatQuoteFill } from "react-icons/bs";
import HeaderProps from "./types";

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <BsFillChatQuoteFill
          style={{ color: colors.green, fontSize: "2.5rem" }}
        />
      </Link>
      <ContentContainer>{children}</ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
