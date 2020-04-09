import React from 'react';
import styled from 'styled-components';
import { BGBrown, Section, H2 } from '../../styles';
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
            <div className="wave-div">
                <svg className="wave-svg" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.30485e-05 169V43.1364C93.8325 22.3956 237.797 -2.07504 410.647 0.140168C644.692 3.13858 769.925 45.4447 997.498 50.2886C1106.28 52.6047 1219.49 46.109 1440 3.72277V160.041" fill="#F9F9FE" />
                </svg>
            </div>
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