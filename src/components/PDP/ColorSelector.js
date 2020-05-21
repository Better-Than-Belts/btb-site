import React from 'react';
import styled from 'styled-components';

class VariantSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }

    render() {
        const styles = {
            background: this.props.color

        }

        return (
            <VariantCircle style={styles}>
                <img src={this.props.img} width="70px" height="70px" />
            </VariantCircle >
        );
    }

};

const VariantCircle = styled.div`
    border-radius: 40px;
    margin: 3px;
    padding: 3px;
    width: 70px;
    height: 70px;
    overflow: hidden;
`;

export default VariantSelector;