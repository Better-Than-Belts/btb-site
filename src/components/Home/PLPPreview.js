import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../device';
import { H2, BGWhite, Section, ButtonYellow, ButtonText, Flex, ImageContainer, Image } from '../../styles';

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
                <Link to="/shop">
                    <ShopNow>
                        <ButtonText>Shop Now</ButtonText>
                    </ShopNow>
                </Link>
            </PLPPreviewSection>
        </BGWhite>
    );
};

// Styles
const PLPPreviewImageContainer = styled(ImageContainer)`
    flex: 1;
`
const PLPPreviewSection = styled(Section)`
    padding-top: 30px;
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
    margin-bottom: 50px;
    @media ${device.tablet} {
        font-size: 32px;
        text-align: left;
        margin-bottom: 10px;
        margin-left: 30px;
    }
`

export default PLPPreview;