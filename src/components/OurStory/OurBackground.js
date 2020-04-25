import React from 'react';
import styled from 'styled-components';
import { H2, P, BGWhite, Section, } from '../../styles';
import { device } from '../../device.js';

const OurBackground = (props) => {
    return (
        <BGWhite class="container">
            <SectionContainer>
                <OurBackgroundTitle>{props.ourBackgroundTitle}</OurBackgroundTitle>
                <OurBackgroundContent>{props.ourBackgroundText1}</OurBackgroundContent>
                <br />
                <OurBackgroundContent>{props.ourBackgroundText1}</OurBackgroundContent>
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
    @media ${device.tablet} {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media ${device.mobile} {
        padding-left: 30px;
        padding-right: 30px;
    }
`

const OurBackgroundTitle = styled(H2)`
    padding-bottom: 30px;
`

const OurBackgroundContent = styled(P)`
    line-height: 30px;
`

export default OurBackground;