import {
    LabelCotainer,
    LabelText
} from "./styles"

import LabelProps from "./types"
import Link from "../Link"

const Label = ({text, withLink = false, linkText = "", linkUrl = "#"}: LabelProps) => {
    return (
        <LabelCotainer>
            <LabelText>{text}</LabelText>
            {withLink && 
                <Link text={linkText} to={linkUrl} />
            }
        </LabelCotainer>
    )   
}

export default Label