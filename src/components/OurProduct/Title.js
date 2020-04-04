import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles';
import { device } from '../../device.js';

const OurProductTitle = (props) => {
    return (
        <Title class="container">
            <TextTitle>Our Product</TextTitle>
        </Title>
    );
};

// Styles
const Title = styled.div`
    text-align: center;
    margin: auto;
    height: 300px;
    justify-content: center;
    display: flex;
    align-items: center;
    @media ${device.tablet} {
        height: 200px;
    }
    @media ${device.mobile} {
        height: 150px;
    }
`

const TextTitle = styled(H1)`
    font-size: 72px;
    @media ${device.tablet} {
        font-size: 50px;
    }
    @media ${device.mobile} {
        font-size: 50px;
    }
`

export default OurProductTitle;