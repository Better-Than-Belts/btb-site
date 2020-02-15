import React from 'react';
import styled from 'styled-components';
import { BGGray, Section, Button, ButtonText, Flex, MockImagePortrait } from '../../styles';

const ShopNow = styled(Button)`
    margin: 0 auto;
    margin-top: 50px;
    display: block;
`;

const PLPPreviewImage = styled(MockImagePortrait)`
    width: 545px;
    height: 630px;
`;

const PLPPreview = () => {
    return (
        <BGGray>
            <Section>
            <Flex>
                <PLPPreviewImage />
                <PLPPreviewImage />
            </Flex>
                <ShopNow>
                    <ButtonText>Shop Now</ButtonText>
                </ShopNow>
            </Section>
        </BGGray>
    );
};


export default PLPPreview;