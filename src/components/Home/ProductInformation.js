import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { AccentImage, Wave, BGBrown, Section, H2, AccentContainer, AccentContainerFull } from '../../styles';
import EthnicallyAssembledIcons from './EthnicallyAssembledIcons';
import { device } from '../../device';
import block from '../../images/Home/Home-YellowBlocks1.svg';
import blockMobile from '../../images/Home/Home-YellowBlockMobile.svg';
import wave1 from '../../images/Home/Home-TealWave1.svg';
import waveMobile from '../../images/Home/Home-TealWaveMobile.svg';

const ProductInformation = (props) => {

    return (
        <BGBrown>
            <ProductInfoSection>
                <Title>{RichText.asText(props.product_information_title)}</Title>
                <EthnicallyAssembledIcons {...props} />
            </ProductInfoSection>
            <AccentContainerFull>
                <Block />
            </AccentContainerFull>
            <Wave />
        </BGBrown>
    );
};

// styles
const ProductInfoSection = styled(Section)`
    padding-top: 50px;
    @media ${device.mobile} {
        padding-bottom: 30px;
    }
    z-index: 3;
`;

const Wave1 = styled(AccentImage)`
    content: url(${wave1});
    width: 100%;
    top: -110px;
    @media ${device.tablet} {
        top: -50px;
    }
    @media (max-width: 550px) {
        content: url(${waveMobile});
        top: -70px;
    }
    @media ${device.mobile} {
        top: -50px;
    }
`;

const Title = styled(H2)`
    text-align: center;
    color: #F9F9FE;
    @media ${device.tablet} {
        font-size: 32px;
    }
`;

const Block = styled(AccentImage)`
    content: url(${block});
    top: -40px;
    left: 20%;
    @media ${device.laptop} {
        left: 10%;
    }
    @media ${device.mobile} {
        content: url(${blockMobile});
        left: 85%;
        top: -15px;
    }
`;

export default ProductInformation;