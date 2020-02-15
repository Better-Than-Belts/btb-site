import React from 'react';
import styled from 'styled-components';
import { BGGray, Section, Button, ButtonText, Flex, ImageContainer, MockImagePortrait } from '../../styles';

const ShopNow = styled(Button)`
    margin: 0 auto;
    margin-top: 50px;
    display: block;
`;

const PLPPreview = () => {
    return (
        <BGGray>
            <Section>
            <Flex>
                <ImageContainer>
                    <MockImagePortrait />
                </ImageContainer>
                <ImageContainer>
                    <MockImagePortrait />
                </ImageContainer>
            </Flex>
                <ShopNow>
                    <ButtonText>Shop Now</ButtonText>
                </ShopNow>
            </Section>
        </BGGray>
    );
};


export default PLPPreview;