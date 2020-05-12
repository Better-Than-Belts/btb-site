import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { ImageContainer, MockImageCircle, P } from '../../styles';
import { RichText } from 'prismic-reactjs';

const ProductInformationItem = (props) => {
    return (
        <ProductInformationItemContainer>
            <ImageContainer>
                <MockImageCircle />
            </ImageContainer>
            <P>{RichText.asText(props.product_information_text)}</P>
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

export default ProductInformationItem;