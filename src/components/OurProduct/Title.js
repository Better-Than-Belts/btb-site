import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles';

const OurProductTitle = (props) => {
    return (
        <Title class="container">
            <H1>Our Product</H1>
        </Title>
    );
};

// Styles
const Title = styled.div`
    font-size: 72px;
    text-align: center;
    margin: auto;
    height: 300px;
    justify-content: center;
    display: flex;
    align-items: center;
`

export default OurProductTitle;