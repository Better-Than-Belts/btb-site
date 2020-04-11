import React from 'react';
import styled from 'styled-components';
import { Wave, BGBrown, Section, H2 } from '../../styles';
import EthnicallyAssembledIcons from './EthnicallyAssembledIcons';
import { device } from '../../device';

const ProductInformation = (props) => {
    return (
        <BGBrown>
            <Section>
                <Title>Ethically assembled in</Title>
                <Title>New York, USA</Title>
                <EthnicallyAssembledIcons {...props} />
            </Section>
            <Wave />
        </BGBrown>
    );
};

// styles
const Title = styled(H2)`
    text-align: center;
    color: #F9F9FE;
    @media ${device.mobile} {
        font-size: 32px;
    }
`;

export default ProductInformation;