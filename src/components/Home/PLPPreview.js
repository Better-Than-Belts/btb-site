import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../device';
import { BTBLink, H2, BGWhite, Section, ButtonYellow, ButtonText, Flex, ImageContainer, Image, RouteLink } from '../../styles';

const PLPPreview = (props) => {
    return (
        <BGWhite>
            <PLPPreviewSection>
                <ShopTitle>Shop best sellers</ShopTitle>
                <PLPFlex>
                    {props.plp_preview_images.map((item, index) => {
                        return (
                            <PLPPreviewImageContainer>
                                <Link to="/shop">
                                    <Image src={item.plp_preview_image.url} />
                                </Link>
                            </PLPPreviewImageContainer>)
                    })}
                </PLPFlex>
                <BTBLink to="/shop">
                    <ShopNow>
                        <ButtonText>Shop All</ButtonText>
                    </ShopNow>
                </BTBLink>
            </PLPPreviewSection>
        </BGWhite>
    );
};

// Styles
const PLPPreviewImageContainer = styled(ImageContainer)`
    flex: 1;
    max-width: 450px;

    @media ${device.mobile} {
        flex: auto;
        max-width: 100%;
    }
`
const PLPPreviewSection = styled(Section)`
    padding-bottom: 50px;
`;

const PLPFlex = styled(Flex)`
    padding: 0 150px;
    @media ${device.tablet} {
        padding: 0 20px;
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
    margin-bottom: 25px;
    @media ${device.tablet} {
        font-size: 32px;
        text-align: left;
        margin-bottom: 10px;
        margin-left: 30px;
    }
`

export default PLPPreview;