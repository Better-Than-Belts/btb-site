import React from 'react';
import { P } from '../../styles';
import styled from 'styled-components';

const FooterLinks = (props) => {
    return (
        <div className="col-xs-12 col-md-6 col-lg-3">
            <Link href="#"><LinkText>Blog</LinkText></Link>
            <Link href="#"><LinkText>Press</LinkText></Link>
            <Link href="#"><LinkText>Terms of Use</LinkText></Link>
            <Link href="#"><LinkText>Privacy Policy</LinkText></Link>
            <Link href="#"><LinkText>Contact Us</LinkText></Link>
        </div>

    )
}

// Styles
const LinkText = styled(P)`
    font-size: 20px;
    font-weight: 800;
    padding-bottom: 5px;
`

const Link = styled.a`
    text-decoration: none;
    color: #F9F9FE;
`

export default FooterLinks;