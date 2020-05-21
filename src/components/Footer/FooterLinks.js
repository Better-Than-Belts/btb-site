import React from 'react';
import { P } from '../../styles';
import styled from 'styled-components';
import { device } from '../../device';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

const FooterLinks = (props) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-2">
            {props.footer_links.map((item, index) => {
                return (
                    <StyledLink to={RichText.asText(item.footer_link)}><LinkText>{RichText.asText(item.footer_link_text)}</LinkText></StyledLink>
                )
            })}
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #F9F9FE;

    :hover {
        text-decoration-color: #F9F9FE;
    }
`

export default FooterLinks;