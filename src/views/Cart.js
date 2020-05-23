import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { BGWhite, TextCenter, H2 } from '../styles';

class Cart extends React.Component {

    render() {
        return (
            <BGWhite>
                <SectionContainer>
                    <PageTitle>
                        <TextCenter>
                            <H2>Your cart</H2>
                        </TextCenter>
                    </PageTitle>
                </SectionContainer>
            </BGWhite>
        )
    }
};

// styles

const SectionContainer = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    padding-right: 20px;
    padding-left: 20px;
`;

const PageTitle = styled.div`
    padding: 50px 40px;
    @media ${device.tablet} {
        padding: 50px 30px;
    }
    @media ${device.mobile} {
        padding: 30px;
    }
`;



export default Cart;