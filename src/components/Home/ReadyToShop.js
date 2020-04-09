import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { BGWhite, ButtonYellow, ButtonText, H2, Section } from '../../styles';

const ReadyToShop = () => {
    return (
        <BGWhite>
            <Section>
                <TextCenter>
                    <Title>Ready to shop?</Title>
                    <ShopNow>
                        <ButtonText>Shop Now</ButtonText>
                    </ShopNow>
                </TextCenter>
            </Section>
        </BGWhite>
    );
};

// Styles
const ShopNow = styled(ButtonYellow)`
    margin: 0 auto;
    margin-top: 50px;
    display: block;
`;

const TextCenter = styled.div`
    text-align: center;
`;

const Title = styled(H2)`
    @media ${device.mobile} {
        font-size: 32px;
    }
`;

export default ReadyToShop;