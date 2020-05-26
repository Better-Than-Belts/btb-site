import React from 'react';
import { Section } from '../../styles';
import { RichText } from 'prismic-reactjs';

const Text = (props) => {

    return ( RichText.render(props.text) )
}

export default Text;