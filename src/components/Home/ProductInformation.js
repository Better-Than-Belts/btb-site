import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import ProductInformationItem from './ProductInformationItem';
import { BGGray, Section, Flex, H2 } from '../../styles';
import { RichText } from 'prismic-reactjs';

const ProductInformation = (props) => {
    const productInformationItems = props.product_information_items.map((item, index) => { return (<ProductInformationItem {...item} />) });

    return (
        <BGGray>
            <Section>
                <H2>{RichText.asText(props.product_information_title)}</H2>
                <ProductInformationFlexNoWrap>
                    {productInformationItems}
                </ProductInformationFlexNoWrap>
                <ProductInformationCarousel>
                    {/* TODO make this an actual carousel */}
                    {productInformationItems}
                </ProductInformationCarousel>
            </Section>
        </BGGray>
    );
};

// Styles
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

export default ProductInformation;