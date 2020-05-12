import React from 'react';
import styled from 'styled-components';
import { Section, Flex, Image } from '../../styles';
import { RichText } from 'prismic-reactjs';

const ImageText = (props) => {
    return (
        <Section>
            <Flex>
                <FlexItem><Image src={props.image.url}/></FlexItem>
                <FlexItem>{ RichText.render(props.text) }</FlexItem>
            </Flex>
        </Section>
    )
}

const FlexItem = styled.div`
    flex: 1;
    text-align: left;
    padding: 20px;
`;

export default ImageText;