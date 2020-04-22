import React from 'react';
import styled from 'styled-components';
import { P } from '../../styles';
import { device } from '../../device';
import { Link } from 'react-router-dom';

class PLPProduct extends React.Component {
    render() {
        return (
            <ProductDiv className="col-md-4 col-6">
                <PDPLink to={`/shop/${this.props.product.id}`}>
                    {this.props.product.images.length ?
                        <Image src={this.props.product.images[0].src} alt={this.props.product.title} /> : null}
                    <ProductName>{this.props.product.title} - {this.props.product.variants[0].price}</ProductName>
                </PDPLink>
            </ProductDiv>
        )
    }

}

export default PLPProduct;

const ProductName = styled(P)`
    font-weight: normal;
    padding: 10px 0px;
`

const ProductDiv = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`

const PDPLink = styled(Link)`
    color: #0C1527;
`;

const Image = styled.img`
    width: 100%;
    height: 515px;
    object-fit: cover;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    @media ${device.tablet} {
        height: 350px;
    }
`;