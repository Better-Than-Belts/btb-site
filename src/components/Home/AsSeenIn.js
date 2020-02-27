import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import AsSeenInItem from './AsSeenInItem';
import { Flex, TextCenter, BGGray, H2, Section } from '../../styles';

const AsSeenIn = (props) => {
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
    @media ${device.mobile} {
        flex-wrap: nowrap;

    }
`;

const AsSeenInContainer = styled(Section)`
    max-width: 800px;
`;


export default AsSeenIn;