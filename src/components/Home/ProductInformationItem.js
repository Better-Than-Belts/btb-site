import React from 'react';
import styled from 'styled-components';
import { BGGray, Button, H2, H3, Section, MockImageSquare, P } from '../../styles';

const MockImageCircle = styled(MockImageSquare)`
    border-radius: 50%;
    border: solid 1px black;
    margin-bottom: 15px;
`;

const ProductInformationItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;
`;

const ProductInformationItem = () => {
    return (
        <ProductInformationItemContainer>
            <MockImageCircle />
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?</P>
        </ProductInformationItemContainer>
    );
};

export default ProductInformationItem;