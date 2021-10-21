import styled from "styled-components";
import colors from "../../styles/colors";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.25rem;
  color: ${colors.text};
`;

export const Text = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.text};
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 0;
  background: transparent;
  transition: 0.3s;
  border-radius: 0.325rem;
  cursor: pointer;
  color: ${colors.text};

  &#accept:hover {
    color: ${colors.green};
  }

  &#reject:hover {
    color: ${colors.redWarning};
  }
`;
