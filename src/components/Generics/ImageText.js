import React from 'react';
import styled from 'styled-components';
import { Flex, Image } from '../../styles';
import { RichText } from 'prismic-reactjs';
import { device } from '../../device';

const ImageText = (props) => {
    return (
        <FlexWrap>
            <FlexItem><Image src={props.image.url}/></FlexItem>
            <FlexItem>{ RichText.render(props.text) }</FlexItem>
        </FlexWrap>
    )
}

const FlexWrap = styled(Flex)`
    @media ${device.tablet}{
        flex-wrap: wrap;
    }
`;

const FlexItem = styled.div`
    flex: 1;
    text-align: left;
    padding: 20px;

    @media ${device.tablet} {
        flex: auto;
    }
`;

export default ImageText;