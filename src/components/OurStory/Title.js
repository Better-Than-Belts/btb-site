import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles';

const OurStoryTitle = (props) => {
    return (
        <Title class="container">
            <H1>Our Story</H1>
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

export default OurStoryTitle;