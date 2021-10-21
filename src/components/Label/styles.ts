import styled from "styled-components";
import colors from "../../styles/colors";

export const LabelCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LabelText = styled.h2`
  color: ${colors.text};
  font-size: 0.9rem;
  font-weight: 600;
`;
