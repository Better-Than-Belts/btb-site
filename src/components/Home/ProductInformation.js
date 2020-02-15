import React from 'react';
import styled from 'styled-components';
import ProductInformationItem from './ProductInformationItem';
import { BGGray, Section, Flex, H2 } from '../../styles';

const ProductInformation = () => {
    return (
        <BGGray>
            <Section>
                <H2>Assembled in New York, USA</H2>
                <Flex>
                    <ProductInformationItem />
                    <ProductInformationItem />
                    <ProductInformationItem />
                    <ProductInformationItem />
                </Flex>
            </Section>
        </BGGray>
    );
};


export default ProductInformation;