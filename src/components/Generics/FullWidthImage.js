import React from 'react';
import { Section, Image } from '../../styles';

const FullWidthImage = (props) => {
    return (
        <Section>
            <Image src={props.image.url}/>
        </Section>
    )
}

export default FullWidthImage;