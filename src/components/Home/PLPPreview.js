import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { H2, BGWhite, Section, ButtonYellow, ButtonText, Flex, ImageContainer, MockImageSquare } from '../../styles';

const PLPPreview = () => {
    return (
        <BGWhite>
            <PLPPreviewSection>
                <ShopTitle>Shop best sellers</ShopTitle>
                <PLPFlex>
                    <ImageContainer>
                        <MockImageSquare />
                    </ImageContainer>
                    <ImageContainer>
                        <MockImageSquare />
                    </ImageContainer>
                </PLPFlex>
                <ShopNow>
                    <ButtonText>Shop All</ButtonText>
                </ShopNow>
            </PLPPreviewSection>
        </BGWhite>
    );
};

// Styles
const PLPPreviewSection = styled(Section)`
    padding-top: 30px;
`;

const PLPFlex = styled(Flex)`
    margin-left: 150px;
    margin-right: 150px;
    @media ${device.tablet} {
        margin-left: 20px;
        margin-right: 20px;
        flex-wrap: wrap;
    }
`;

const ShopNow = styled(ButtonYellow)`
    margin: 0 auto;
    margin-top: 50px;
    display: block;
`;

const ShopTitle = styled(H2)`
    text-align: center;
    margin-bottom: 50px;
    @media ${device.tablet} {
        font-size: 32px;
        text-align: left;
        margin-bottom: 10px;
        margin-left: 30px;
    }
`

export default PLPPreview;