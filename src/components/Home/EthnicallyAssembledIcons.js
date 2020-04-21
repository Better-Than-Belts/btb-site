import styled from 'styled-components';
import { device } from '../../device';
import React from 'react';
import { Flex, ImageContainer, P } from '../../styles';
import MadeInAmericaIcon from '../../images/MadeInUSA.png';
import FiveStarsIcon from '../../images/FiveStars.png';
import FastShippingIcon from '../../images/FastShipping.png';
import StrongIcon from '../../images/Strong.png';
import Carousel from '../Shared/Carousel';

const EthnicallyAssembledIcons = (props) => {
    return (
        <div className="home-page">
            <FlexNoWrap>
                <AssembledIcon {...props} icon={MadeInAmericaIcon} ethnicallyAssembledText="Made in America" />
                <AssembledIcon {...props} icon={FiveStarsIcon} ethnicallyAssembledText="Customers give us 5 stars" />
                <AssembledIcon {...props} icon={FastShippingIcon} ethnicallyAssembledText="Free shipping and returns" />
                <AssembledIcon {...props} icon={StrongIcon} ethnicallyAssembledText="Strong, stretchy elastic" />
            </FlexNoWrap>
            <CarouselContainer>
                <Carousel
                    icons={[MadeInAmericaIcon, FiveStarsIcon, FastShippingIcon, StrongIcon]}
                    texts={["Made in America", "Customers give us 5 stars", "Free shipping and returns", "Strong, stretchy elastic"]} imageWidth="200px" textColor="#F9F9FE" arrowColor="#F9F9FE" />
            </CarouselContainer>
        </div>
    );
};

const FlexNoWrap = styled(Flex)`
    flex-wrap: nowrap;

    @media ${device.tablet} {
        flex-wrap: wrap
    }

    @media ${device.mobile} {
        display: none;
        flex-wrap: wrap;
    }
`;

const CarouselContainer = styled.div`
    display: none;
    @media ${device.mobile} {
        margin: 15px;
        display: block;
    }
`;

export default EthnicallyAssembledIcons;

// ProductInformationItem
const AssembledIcon = (props) => {
    return (
        <ItemContainer>
            <ImageContainer>
                <Image src={props.icon} />
            </ImageContainer>
            <ItemText>{props.ethnicallyAssembledText}</ItemText>
        </ItemContainer>
    );
};

// Styles
const ItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;

    @media ${device.tablet} {
        flex: 0 0 45%;
        margin-top: 10px;
    }

    @media ${device.mobile} {
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const ItemText = styled(P)`
    text-align: center;
    padding: 0 10px 10px 10px;
    color: #F9F9FE;
`;

const Image = styled.img`
    max-width: 230px;
    width: 100%;

    @media ${device.tablet} {
        max-width: 250px;
    }
`
