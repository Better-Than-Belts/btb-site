import styled from 'styled-components';
import { device } from '../../device';
import React from 'react';
import { Flex, ImageContainer, Image, P } from '../../styles';
import { RichText } from 'prismic-reactjs';

const ProductInformationShared = (props) => {
    const product_information_items = props.product_information_items.map((item, index) => {
        return <ProductInformationItem {...item} />
    })
    return (
        <div>
            <ProductInformationFlexNoWrap>
                {product_information_items}
            </ProductInformationFlexNoWrap>
            <ProductInformationCarousel>
                {product_information_items}
            </ProductInformationCarousel>
        </div>
    );
};

const ProductInformationFlexNoWrap = styled(Flex)`
    flex-wrap: nowrap;

    @media ${device.tablet} {
        flex-wrap: wrap
    }

    @media ${device.mobile} {
        display: none;
    }
`;

const ProductInformationCarousel = styled(Flex)`
    display: none;

    @media ${device.mobile} {
        display: block;
    }
`;

export default ProductInformationShared;

// ProductInformationItem
const ProductInformationItem = (props) => {
    console.log(props)
    return (
        <ProductInformationItemContainer>
            <ImageCircleContainer>
                <Image src={props.product_information_image.url} />
            </ImageCircleContainer>
            <P>{RichText.asText(props.product_information_text)}</P>
        </ProductInformationItemContainer>
    );
};

// Styles
const ImageCircleContainer = styled(ImageContainer)`
    border-radius: 50%;
`;

const ProductInformationItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;

    @media ${device.tablet} {
        flex: 0 0 45%;
    }
`;