import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { ImageContainer, MockImageSquare, P } from '../../styles';

const MockImageCircle = styled(MockImageSquare)`
    border-radius: 50%;
    margin-bottom: 15px;
`;

const ProductInformationItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;

    @media ${device.tablet} {
        flex: 0 0 45%;

    }
`;

const ProductInformationItem = () => {
    return (
        <ProductInformationItemContainer>
            <ImageContainer>
                <MockImageCircle />
            </ImageContainer>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?</P>
        </ProductInformationItemContainer>
    );
};

export default ProductInformationItem;