import React from 'react';
import { P } from '../../styles';
import styled from 'styled-components';
import { device } from '../../device';

const FooterLinks = (props) => {
    return (
        <div className="col-xs-12 col-md-4 col-lg-2">
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
    font-weight: 500;
    line-height: 30px;
    color: #F9F9FE;
    @media ${device.mobile} {
        font-size: 16px;
        line-height: 32px;
        font-weight: 800;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #F9F9FE;
`

export default FooterLinks;