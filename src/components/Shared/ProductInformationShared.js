import styled from 'styled-components';
import { device } from '../../device';
import React from 'react';
import { Flex, ImageContainer, MockImageCircle, P } from '../../styles';

const ProductInformationShared = (props) => {
    return (
        <div>
            <ProductInformationFlexNoWrap>
                <ProductInformationItem {...props} />
                <ProductInformationItem {...props} />
                <ProductInformationItem {...props} />
                <ProductInformationItem {...props} />
            </ProductInformationFlexNoWrap>
            <ProductInformationCarousel>
                <ProductInformationItem {...props} />
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
    return (
        <ProductInformationItemContainer>
            <ImageContainer>
                <MockImageCircle />
            </ImageContainer>
            <P>{props.productInformationText}</P>
        </ProductInformationItemContainer>
    );
};

// Styles
const ProductInformationItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;

    @media ${device.tablet} {
        flex: 0 0 45%;
    }
`;