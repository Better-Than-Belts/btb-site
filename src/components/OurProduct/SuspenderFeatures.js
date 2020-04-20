import styled from 'styled-components';
import { device } from '../../device';
import React from 'react';
import { Flex, ImageContainer, MockImageCircle, P } from '../../styles';
import circleImage from '../../images/Circle.png';
import Carousel from '../Shared/Carousel';

const SuspenderFeatures = (props) => {
    return (
        <Features className="our-product">
            <FlexNoWrap>
                <FeatureItem text={props.featureText1} />
                <FeatureItem text={props.featureText2} />
            </FlexNoWrap>
            <FlexNoWrap>
                <FeatureItem text={props.featureText3} />
                <FeatureItem text={props.featureText4} />
            </FlexNoWrap>
            <ProductInformationCarousel>
                {/* <FeatureItem {...props} /> */}
                <Carousel
                    icons={[circleImage, circleImage, circleImage, circleImage]}
                    texts={[props.featureText1, props.featureText2, props.featureText3, props.featureText4]} textColor="#0C1624" arrowColor="#004669" imageWidth="210px" />
            </ProductInformationCarousel>
        </Features>
    );
};

// Styles
const Features = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    @media ${device.mobile} {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

const FlexNoWrap = styled(Flex)`
    flex-wrap: nowrap;

    @media ${device.tablet} {
        display: none;
    }
`;

const ProductInformationCarousel = styled(Flex)`
    display: none;

    @media ${device.tablet} {
        display: block;
    }
`;

export default SuspenderFeatures;

// ProductInformationItem
const FeatureItem = (props) => {
    return (
        <FeatureItemContainer>
            <ImageContainer>
                <Image />
                <Text>{props.text}</Text>
            </ImageContainer>
        </FeatureItemContainer>
    );
};

// Styles
const FeatureItemContainer = styled.div`
    padding: 15px;

    @media ${device.tablet} {
        flex: 0 0 45%;
    }
`;

const Image = styled(MockImageCircle)`
    vertical-align: middle;
    float: left;
    max-width: 200px;
    padding-right: 30px;
    @media ${device.mobile} {
        max-width: 210px;
    }
`;

const Text = styled.span`
    vertical-align: middle;
    display: table-cell;
    height: 160px;
    font-family: Libre Franklin;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    width: 300px;
    color: #0C1527;

    @media ${device.mobile} {
        font-size: 16px;
        line-height: 26px;
    }
`;