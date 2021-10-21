import styled from "styled-components";
import colors from "../../styles/colors";

export const BodyContainer = styled.div`
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .9fr 5fr 0.8fr;
`;
