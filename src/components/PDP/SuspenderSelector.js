import React from 'react';
import styled from 'styled-components';

class SuspenderSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }

    render() {
        return (
            <VariantCircle>
                <ImageIcon src={this.props.img} />
            </VariantCircle >
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

const ImageIcon = styled.img`
    position: relative;
    object-fit: cover;
    padding: 0px;
    width: 50px;
    height: 50px;
    top: -3px;
    left: -3px;
`;

export default SuspenderSelector;