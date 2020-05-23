import React from 'react';
import styled from 'styled-components';
import { Section, Flex, Image } from '../../styles';
import { RichText } from 'prismic-reactjs';
import { device } from '../../device';

const TextImage = (props) => {
    return (
        <FlexWrap>
            <FlexItemText>{ RichText.render(props.text) }</FlexItemText>
            <FlexItemImage><Image src={props.image.url}/></FlexItemImage>
        </FlexWrap>
    )
}

const FlexWrap = styled(Flex)`
    @media ${device.tablet} {
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

const FlexItemImage = styled(FlexItem)`
    @media ${device.tablet} {
        order: 1;
    }
`;

const FlexItemText = styled(FlexItem)`
@media ${device.tablet} {
    order: 2;
}
`;

export default TextImage;