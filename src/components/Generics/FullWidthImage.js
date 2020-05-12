import React from 'react';
import styled from 'styled-components';
import { Section, Flex, Image } from '../../styles';
import { RichText } from 'prismic-reactjs';

const FullWidthImage = (props) => {
    return (
        <Section>
            <Image src={props.image.url}/>
        </Section>
    )
}

export default FullWidthImage;