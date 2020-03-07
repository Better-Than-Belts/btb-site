import React from 'react';
import styled from 'styled-components';
import { H3 } from '../../styles';
import { device } from '../../device.js';

class PLPProduct extends React.Component {
    render() {
        return (
            <ProductDiv className="col-md-4 col-6">
                {this.props.product.images.length ?
                    <img src={this.props.product.images[0].src} alt={this.props.product.title} width="100%" /> : null}
                <ProductName>{this.props.product.title}</ProductName>
            </ProductDiv>
        )
    }

}

export default PLPProduct;

const ProductName = styled(H3)`
    font-weight: normal;
    font-size: 16px;
`

const ProductDiv = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`