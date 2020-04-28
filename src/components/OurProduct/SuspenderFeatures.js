import styled from 'styled-components';
import { device } from '../../device';
import React from 'react';
import { Flex, ImageContainer, MockImageCircle, P, Image } from '../../styles';
import circleImage from '../../images/Circle.png';
import Carousel from '../Shared/Carousel';
import { RichText } from 'prismic-reactjs';

const SuspenderFeatures = (props) => {
    return (
        <Features className="our-product">
            <FeatureItems>
                {props.our_product_information.map((item, index) => {
                    return (
                        <FeatureItem src={item.information_item_image.url} text={RichText.asText(item.information_item_text)} />
                    );
                })}
            </FeatureItems>
            {/* <ProductInformationCarousel>
                // {/* <FeatureItem {...props} /> 
                <Carousel
                    icons={[circleImage, circleImage, circleImage, circleImage]}
                    texts={[props.featureText1, props.featureText2, props.featureText3, props.featureText4]} textColor="#0C1624" arrowColor="#004669" imageWidth="210px" />
            </ProductInformationCarousel> */}
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

const FeatureItems = styled(Flex)`
    flex-wrap: wrap;
    >div {
        flex: 0 50%;
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
            <Flex>
                <FeatureImageContainer>
                    <FeatureImage src={props.src}/>
                </FeatureImageContainer>
                <Text><P>{props.text}</P></Text>
            </Flex>
        </FeatureItemContainer>
    );
};

// Styles
const FeatureItemContainer = styled.div`
    padding: 10px 0;
`;

const FeatureImage = styled(Image)`
    width: auto;
`;

const FeatureImageContainer = styled.div`
    width: 50%;
    overflow: hidden;
    border-radius: 50%;
`;

const Text = styled.span`
    vertical-align: middle;
    display: table-cell;
    height: 160px;
    width: 300px;
`;