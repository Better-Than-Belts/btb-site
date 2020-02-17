import React from 'react';
import styled from 'styled-components';
import { MockImageLandscape, ImageContainer } from '../../styles';


const AsSeenInItem = () => {
    return (
        <AsSeenInItemContainer>
            <ImageContainer>
                <MockImageLandscape />
            </ImageContainer>
        </AsSeenInItemContainer>
    );
};

// Styles
const AsSeenInItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;
    word-wrap: break-word;
`;

export default AsSeenInItem;