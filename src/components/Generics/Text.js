import React from 'react';
import { Section } from '../../styles';
import { RichText } from 'prismic-reactjs';

const Text = (props) => {

    console.log(props);
    return (
        <Section>
            { RichText.render(props.text) }
        </Section>
    )
}

export default Text;