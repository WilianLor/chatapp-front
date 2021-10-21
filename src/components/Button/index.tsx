import { 
    ButtonFilled,
    ButtonOutlined
} from "./styles"

import ButtonProps from "./types"

const Button = ({styleType, text, color, ...rest}: ButtonProps) => {
    if(styleType === "outlined") {
        return (
            <ButtonOutlined {...rest}>{text}</ButtonOutlined>
        )
    } 

    return (
        <ButtonFilled style={{background: color}} {...rest}>{text}</ButtonFilled>
    )   
}

export default Button