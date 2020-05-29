import React from 'react';
import styled from 'styled-components';
import { P, Flex } from '../../styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PLPProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    filterReviews = (reviews, handle) => {
        return reviews.filter(review => review.product_handle == handle);
    }

    componentDidMount() {
        this.setState({ reviews: this.props.reviews })
    }

    componentDidUpdate(prevProps) {
        if(this.props.reviews !== prevProps.reviews) {
            console.log("Updating");
            this.setState({ reviews: this.props.reviews });
        }
    }

    render() {
        let filteredReviews = this.state.reviews.filter((review) => review.product_handle == this.props.product.handle);
        let hoverImageUrl = ""
        if (this.props.product.images.length > 1) {
            hoverImageUrl = this.props.product.images[1].src
        } else {
            hoverImageUrl = this.props.product.images[0].src;
        }
        return (
            <ProductDiv className="col-md-4 col-6">
                <PDPLink to={`/shop/${this.props.product.id}`}>
                    {this.props.product.images.length ?
                        <ProductImage src={this.props.product.images[0].src} alt={this.props.product.title} hoverImage={hoverImageUrl} /> : null}
                    <ProductName>{this.props.product.title} - {this.props.product.variants[0].price}</ProductName>
                    <ReviewAverage reviews={filteredReviews.length > 0 ? filteredReviews : []} />
                </PDPLink>
            </ProductDiv>
        )
    }

}

const ReviewAverage = (props) => {
    const average = props.reviews.length ? (props.reviews.map((review) => review.rating).reduce((p, c) => p + c) / props.reviews.length) : 0;

    var stars = []

    for (var i = 0; i < Math.ceil(average); i++) {
        stars.push(<FontAwesomeIcon icon="star"/>);
    } 
    return (
        <ReviewsContainer>
                {stars.length ? (<Stars>
                    {stars}
                </Stars>) : ''}
                <ReviewsCount>{props.reviews.length} Review{props.reviews.length && props.reviews.length == 1 ? '' : 's'}</ReviewsCount>
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
    margin-right: 10px;
`;

const ReviewsCount = styled(P)`
    display:inline;
    line-height: 18px;
    margin: 0;
`;

const ProductName = styled(P)`
    font-weight: normal;
    padding: 10px 0px;
`

const ProductDiv = styled.div`
    padding: 20px 40px;
    @media (max-width: 550px) {
        padding: 20px;
    }
`

const PDPLink = styled(Link)`
    color: #0C1527;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border: none;
    padding: 0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    &:hover {
        cursor: pointer;
        content: url(${props => props.hoverImage})
    }
`;