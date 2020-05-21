import React from 'react';
import styled from 'styled-components';
import { H2, P, BGWhite, Section, } from '../../styles';
import { device } from '../../device.js';
import { RichText } from 'prismic-reactjs';

const OurBackground = (props) => {
    return (
        <BGWhite class="container">
            <SectionContainer>
                <OurBackgroundTitle>{RichText.asText(props.subhero_title)}</OurBackgroundTitle>
                <OurBackgroundContent>{RichText.render(props.subhero_text)}</OurBackgroundContent>
            </SectionContainer>
        </BGWhite>
    );
};

// Styles
const SectionContainer = styled(Section)`
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    @media ${device.laptop} {
        padding-bottom: 10px;
    }
    @media ${device.tablet} {
        padding-left: 30px;
        padding-right: 30px;
    }
`

const OurBackgroundTitle = styled(H2)`
`

const OurBackgroundContent = styled(P)`
    line-height: 30px;
`

export default OurBackground;