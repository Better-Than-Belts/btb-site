import React from 'react';
import styled from 'styled-components';
import { Section, Flex, Image } from '../../styles';
import { RichText } from 'prismic-reactjs';

const TextImage = (props) => {
    return (
        <Section>
            <Flex>
                <FlexItem>{ RichText.render(props.text) }</FlexItem>
                <FlexItem><Image src={props.image.url}/></FlexItem>
            </Flex>
        </Section>
    )
}

const FlexItem = styled.div`
    flex: 1;
    text-align: left;
    padding: 20px;
`;

export default TextImage;