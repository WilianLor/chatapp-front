import styled from "styled-components";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const LinkComponent = styled(Link)`
  color: ${colors.blue};
  font-size: 0.9rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
