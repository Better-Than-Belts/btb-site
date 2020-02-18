import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import ProductInformationItem from './ProductInformationItem';
import { BGGray, Section, Flex, H2 } from '../../styles';

const ProductInformation = (props) => {
    return (
        <BGGray>
            <Section>
                <H2>{props.productInformationTitle}</H2>
                <ProductInformationFlexNoWrap>
                    <ProductInformationItem {...props}/>
                    <ProductInformationItem {...props}/>
                    <ProductInformationItem {...props}/>
                    <ProductInformationItem {...props}/>
                </ProductInformationFlexNoWrap>
                <ProductInformationCarousel>
                    <ProductInformationItem {...props}/>
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