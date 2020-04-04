import React from 'react';
import styled from 'styled-components';
import { Section, H2, P, ImageContainer, MockImageLandscape } from '../../styles';
import ProductInformationShared from '../Shared/ProductInformationShared';
import { device } from '../../device.js';


const WhySuspenders = (props) => {
    return (
        <SectionContainer>
            <div className="row flex-md-row-reverse">
                <ImageContainer className="col-xs-12 col-xl-6">
                    <MockImageLandscape />
                </ImageContainer>
                <div className="col-xs-12 col-xl-6">
                    <Title>Why Suspenders</Title>
                    <P>
                        {props.whySuspendersText}
                    </P>
                </div>
            </div>
            <ProductInformationShared {...props} />
        </SectionContainer>
    );
};

// Styles

const Title = styled(H2)`
    padding-top: 20px;
`

const SectionContainer = styled(Section)`
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 20px;

    @media ${device.tablet} {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media ${device.mobile} {
        padding-left: 30px;
        padding-right: 30px;
    }
`


export default WhySuspenders;