import React from 'react';
import styled from 'styled-components';

class BeanieSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }

    render() {
        const styles = {
            'background-color': this.props.color
        }

        return (
            <VariantCircle style={styles} />
        );
    }

};

const VariantCircle = styled.div`
    border-radius: 40px;
    margin: 3px;
    padding: 3px;
    width: 50px;
    height: 50px;
    overflow: hidden;
`;

export default BeanieSelector;