import React from 'react';
import styled from 'styled-components';
import { MockImageLandscape, ImageContainer } from '../../styles';

const AsSeenInItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;
    word-wrap: break-word;
`;

const AsSeenInItem = () => {
    return (
        <AsSeenInItemContainer>
            <ImageContainer>
                <MockImageLandscape />
            </ImageContainer>
        </AsSeenInItemContainer>
    );
};

export default AsSeenInItem;