import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import AsSeenInItem from './AsSeenInItem';
import { Flex, BGGray, H2, Section } from '../../styles';

const AsSeenIn = () => {
    return (
        <BGGray>
            <AsSeenInContainer>
                <TextCenter>
                    <H2>As seen in...</H2>
                    <AsSeenInRow>
                        <AsSeenInItem/>
                        <AsSeenInItem/>
                    </AsSeenInRow>
                    <AsSeenInRow>
                        <AsSeenInItem/>
                        <AsSeenInItem/>
                    </AsSeenInRow>
                </TextCenter>
            </AsSeenInContainer>
        </BGGray>
    );
};

// Styles
const AsSeenInRow = styled(Flex)`
    @media ${device.mobileL} {
        flex-wrap: nowrap;

    }
`;

const AsSeenInContainer = styled(Section)`
    max-width: 800px;
`;

const TextCenter = styled.div`
    text-align: center;
`;


export default AsSeenIn;