import React from 'react';
import styled from 'styled-components';
import { H3 } from '../../styles';

class PLPProduct extends React.Component {
    render() {
        return (
            <div className="col-sm-4" style={productStyle}>
                {this.props.product.images.length ?
                    <img src={this.props.product.images[0].src} alt={this.props.product.title} width="100%" /> : null}
                <ProductName>{this.props.product.title}</ProductName>
            </div>
        )
    }

}

export default PLPProduct;

const ProductName = styled(H3)`
    font-weight: normal;
    font-size: 20px;
`

const productStyle = {
    'padding': '0 40px'
};