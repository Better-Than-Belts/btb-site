import React from 'react';
import styled from 'styled-components';
import { Button, ButtonText, H2, Section } from '../../styles';

const ReadyToShop = () => {
    return (
        <Section>
            <TextCenter>
                <H2>Ready to shop?</H2>
                <ShopNow>
                    <ButtonText>Shop Now</ButtonText>
                </ShopNow>
            </TextCenter>
        </Section>
    );
};

// Styles
const ShopNow = styled(Button)`
    margin: 0 auto;
    margin-top: 50px;
    display: block;
`;

const TextCenter = styled.div`
    text-align: center;
`;

export default ReadyToShop;