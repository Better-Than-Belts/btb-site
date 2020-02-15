import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import ProductInformationItem from './ProductInformationItem';
import { BGGray, Section, Flex, H2 } from '../../styles';

const ProductInformationFlexNoWrap = styled(Flex)`
    flex-wrap: nowrap;

    @media ${device.tablet} {
        flex-wrap: wrap

    }

    @media ${device.mobileL} {
        display: none;

    }
`;

const ProductInformationCarousel = styled(Flex)`
    display: none;

    @media ${device.mobileL} {
        display: block;

    }
`;

const ProductInformation = () => {
    return (
        <BGGray>
            <Section>
                <H2>Assembled in New York, USA</H2>
                <ProductInformationFlexNoWrap>
                    <ProductInformationItem />
                    <ProductInformationItem />
                    <ProductInformationItem />
                    <ProductInformationItem />
                </ProductInformationFlexNoWrap>
                <ProductInformationCarousel>
                    <ProductInformationItem />
                </ProductInformationCarousel>
            </Section>
        </BGGray>
    );
};


export default ProductInformation;