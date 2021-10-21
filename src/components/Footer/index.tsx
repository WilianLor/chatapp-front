import {
    FooterContainer,
    FooterText,
    LinksContainer
} from "./styles"

import Link from "../../components/Link"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>© 2021 Copyright</FooterText>
            <LinksContainer>
                <Link text="Termos" to="#"/>
                <Link text="Privacidade" to="#"/>
                <Link text="Segurança" to="#"/>
            </LinksContainer>
        </FooterContainer>
    )
}

export default Footer