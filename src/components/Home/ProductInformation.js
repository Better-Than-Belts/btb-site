import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Wave, BGBrown, Section, H2 } from '../../styles';
import EthnicallyAssembledIcons from './EthnicallyAssembledIcons';
import { device } from '../../device';

const ProductInformation = (props) => {

    return (
        <BGBrown>
            <Section>
                <Title>{RichText.asText(props.product_information_title)}</Title>
                <EthnicallyAssembledIcons />
            </Section>
            <Wave />
        </BGBrown>
    );
};

// styles
const Title = styled(H2)`
    text-align: center;
    color: #F9F9FE;
    @media ${device.tablet} {
        font-size: 32px;
    }
`;

export default ProductInformation;