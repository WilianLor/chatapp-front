import styled from "styled-components";
import colors from "../../styles/colors";

export const InputComponent = styled.input`
    width: 16.3rem;
    padding-left: .7rem;
    padding-bottom: .6rem;
    padding-top: .6rem;
    font-size: 1.1rem;
    color: ${colors.text}
    font-weight: 500;
    border-radius: .325rem;
    border: 0.11rem solid ${colors.gray};
    transition: border .2s;

    &#error {
        border: 0.11rem solid ${colors.redWarning};
    }

    &:focus {
        border: 0.11rem solid ${colors.blue};
    }
`;
