import React from 'react';
import styled from 'styled-components';
import { BGGray, Button, H2, H3, Section, MockImageLandscape, P } from '../../styles';

const AsSeenInItemImage = styled(MockImageLandscape)`
    height: 120px;
    width: 300px;
`;

const AsSeenInItemContainer = styled.div`
    padding: 15px;
    margin-top: 50px;
`;

const AsSeenInItem = (props) => {
    return (
        <AsSeenInItemContainer>
            <AsSeenInItemImage />
            <H3>{props.name}</H3>
        </AsSeenInItemContainer>
    );
};

export default AsSeenInItem;