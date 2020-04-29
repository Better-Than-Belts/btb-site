import React from 'react';
import { BGBrown, Section } from '../styles';
import styled from 'styled-components';
import { device } from '../device.js';
import Newsletter from './Footer/Newsletter';
import FooterLinks from './Footer/FooterLinks';
import SocialMedia from './Footer/SocialMedia';
import PrismicPage from '../prismic/PrismicPage';

class Footer extends React.Component {
    static pageType = 'footer';

    render() {
        return (
            <BGBrown>
                <SectionContainer className="row">
                    <Newsletter {...this.props.doc.data}/>
                    <FooterLinks {...this.props.doc.data}/>
                    <SocialMedia {...this.props.doc.data}/>
                </SectionContainer>
            </BGBrown>
        )
    }
    
}

// Styles
const SectionContainer = styled(Section)`
    padding-top: 50px;
    padding-bottom: 50px;

    @media ${device.tablet} {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media ${device.mobile} {
        padding-left: 30px;
        padding-right: 30px;
    }
`

export default PrismicPage(Footer);