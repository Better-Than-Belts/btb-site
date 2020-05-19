import React from 'react';
import styled from 'styled-components';
import { P, Flex } from '../../styles';
import { device } from '../../device';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PLPProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProductDiv className="col-md-4 col-6">
                <PDPLink to={`/shop/${this.props.product.id}`}>
                    {this.props.product.images.length ?
                        <ProductImage src={this.props.product.images[0].src} alt={this.props.product.title} /> : null}
                    <ProductName>{this.props.product.title} - {this.props.product.variants[0].price}</ProductName>
                    <ReviewAverage reviews={this.props.reviews} handle={this.props.product.handle} reviewsLoading={this.props.reviewsLoading} />
                </PDPLink>
            </ProductDiv>
        )
    }

}

const ReviewAverage = (props) => {
    return (
        props.reviewsLoading ? <div>Loading Reviews</div> 
            : <ReviewsContainer>
                    <Stars>
                        <FontAwesomeIcon icon="star"/>
                        <FontAwesomeIcon icon="star"/>
                        <FontAwesomeIcon icon="star"/>
                        <FontAwesomeIcon icon="star"/>
                        <FontAwesomeIcon icon="star"/>
                    </Stars>
                    <ReviewsCount>{5} Reviews</ReviewsCount>
            </ReviewsContainer>
    )
}

export default PLPProduct;

const ReviewsContainer = styled(Flex)`
    text-decoration: none;
    justify-content: normal;

    * {
        text-decoration: none;
    }
`;

const Stars = styled.div`
    color: #FDC16E;
`;

const ReviewsCount = styled(P)`
    display:inline;
    line-height: 18px;
    margin: 0;
    margin-left: 10px;
`;

const ProductName = styled(P)`
    font-weight: normal;
    padding: 10px 0px;
`

const ProductDiv = styled.div`
    padding: 20px;
`

const PDPLink = styled(Link)`
    color: #0C1527;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
`;