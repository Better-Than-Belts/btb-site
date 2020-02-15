import React from 'react';
import styled from 'styled-components';
import AsSeenInItem from './AsSeenInItem';
import { Flex, BGGray, Button, ButtonText, H2, Section } from '../../styles';

const AsSeenInContainer = styled(Section)`
    max-width: 800px;
`;

const TextCenter = styled.div`
    text-align: center;
`;

const AsSeenIn = () => {
    return (
        <BGGray>
            <AsSeenInContainer>
                <TextCenter>
                    <H2>As seen in...</H2>
                    <Flex>
                        <AsSeenInItem name="News@Northeastern"/>
                        <AsSeenInItem name="Kickstarter"/>
                    </Flex>
                    <Flex>
                        <AsSeenInItem name="The Boston Globe"/>
                        <AsSeenInItem name="Lucid"/>
                    </Flex>
                </TextCenter>
            </AsSeenInContainer>
        </BGGray>
    );
};


export default AsSeenIn;