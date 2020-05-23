import styled from 'styled-components';
import { device } from '../../device';
import React from 'react';
import { Flex, P, Image, ImageContainer } from '../../styles';
import { RichText } from 'prismic-reactjs';
import Carousel from '../Shared/Carousel';
import circleImage from '../../images/Circle.png';

const SuspenderFeatures = (props) => {
    var informationImageURLs = props.our_product_information.map((item, index) => {
        return item.information_item_image.url;
    });

    var informationText = props.our_product_information.map((item, index) => {
        return RichText.asText(item.information_item_text);
    });

    return (
        <Features className="our-product">
            <FeatureItems>
                {props.our_product_information.map((item, index) => {
                    return (
                        <FeatureItem src={item.information_item_image.url} text={RichText.asText(item.information_item_text)} />
                    );
                })}
            </FeatureItems>
            <ProductInformationCarousel>
                <Carousel
                    icons={informationImageURLs}
                    texts={informationText} textColor="#0C1624" arrowColor="#004669" imageWidth="210px" />
            </ProductInformationCarousel>
        </Features>
    );
};

// Styles
const Features = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    @media ${device.tablet} {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

const FeatureItems = styled(Flex)`
    flex-wrap: wrap;
    >div {
        flex: 0 50%;
    }
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
            <FeatureImageContainer>
                <FeatureImage src={props.src} />
                <Text><P>{props.text}</P></Text>
            </FeatureImageContainer>
        </FeatureItemContainer>
    );
};

// Styles
const FeatureItemContainer = styled.div`
    padding: 10px 0;
    @media ${device.tablet} {
        flex: 0 0 45%;
    }
`;

const FeatureImage = styled.div`
    vertical-align: middle;
    float: left;
    width: 200px;
    height: 200px;
    background-size: cover;
    border-radius: 50%;
    background-image: url(${props => props.src});
    @media ${device.mobile} {
        width: 210px;
        height: 210px;
    }
`;

const FeatureImageContainer = styled(ImageContainer)`
    overflow: hidden;
`;

const Text = styled.span`
    padding-left: 30px;
    vertical-align: middle;
    display: table-cell;
    height: 160px;
    width: 300px;
`;