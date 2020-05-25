import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { BTBLink, RouteLink, BGWhite, ButtonYellow, ButtonText, H2, Section } from '../../styles';

const ReadyToShop = () => {
    return (
        <BGWhite>
            <ReadySection>
                <TextCenter>
                    <Title>Ready to shop?</Title>
                    <BTBLink to="/shop">
                        <ShopNow>
                            <ButtonText>Shop Now</ButtonText>
                        </ShopNow>
                    </BTBLink>
                </TextCenter>
            </ReadySection>
        </BGWhite>
    );
};

// Styles
const ReadySection = styled(Section)`
    padding-top: 30px;
    padding-bottom: 80px;
    @media ${device.tablet} {
        padding-top: 70px;
        padding-bottom: 80px;
    }
`;

const ShopNow = styled(ButtonYellow)`
    margin: 0 auto;
    margin-top: 30px;
    display: block;
    @media ${device.tablet} {
        margin-top: 20px;
    }
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