import {
    FormContainer,
    FormTitle
} from "./styles"

import FormProps from "./types"

const Form = ({title, children}: FormProps) => {
    return (
        <FormContainer onSubmit={(e) => e.preventDefault()}>
            <FormTitle>{title}</FormTitle>
            {children}
        </FormContainer>
    )
}

export default Form