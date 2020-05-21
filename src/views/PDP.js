import React from 'react';
import { Flex, Button, FullPageContainer, H2, P, P3, ButtonText, ButtonYellow, Image, BGWhite } from '../styles';
import styled from 'styled-components';
import VariantSelector from '../components/PDP/ColorSelector';
import UserReview from '../components/PDP/UserReview';
import Accordion from '../components/Accordion/Accordion';
import { Carousel } from 'react-bootstrap';
import { device } from '../device';
import "./PDP.css";
import { Link } from 'react-router-dom';

class PDP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentId: "",
            dropdownValue: "Select your size",
            product: {},
            images: [],
            productVariants: {},
            products: []
        };
        this.setProduct = this.setProduct.bind(this);
    }

    componentDidMount() {
        this.props.client.product.fetch(this.props.id).then((res) => {
            this.setState({
                currentId: res.id,
                product: res,
                images: res.images,
                productVariants: res.variants[0]
            });
        });
        this.props.client.product.fetchAll().then((res) => {
            this.setState({
                products: res,
            });
        });
    }

    changeDropdownValue = event => {
        const value = event.target.innerHTML;
        this.setState({ dropdownValue: value });
    }

    setProduct(selected) {
        this.setState({
            currentId: selected.id,
            product: selected,
            images: selected.images,
            selected: selected.variants[0]
        });
    }

    render() {
        let userReviews = text.userReviews.map((item, index) => <UserReview {...item} />);
        return (
            <BGWhite>
                <FullPageContainer>
                    <Flex>
                        <PDPImages>
                            {
                                this.state.images.slice(0).map((image, index) => {
                                    return (
                                        <ProductImage src={image.src} />
                                    )
                                })
                            }
                        </PDPImages>


                        <PDPDetails>
                            <PDPCarousel interval={this.state.images.length}>
                                {
                                    this.state.images.map((image, index) => {
                                        return (
                                            <Carousel.Item>
                                                <ProductImage src={image.src} />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </PDPCarousel>
                            <H2>{this.state.product.title} - {this.state.productVariants.price}</H2>
                            <P>{this.state.product.description}</P>
                            <ProductVariants>
                                {
                                    this.state.products.map((variant, index) => {
                                        var iconImage = variant.images[0].src;
                                        return (
                                            <Link to={`/shop/${variant.id}`} onClick={() => this.setProduct(variant)}>
                                                <VariantCircleBorder className={this.state.product.title === variant.title ? " selected" : ""}>
                                                    <VariantSelector {...variant} img={iconImage} />
                                                </VariantCircleBorder>
                                            </Link>
                                        )
                                    })
                                }
                            </ProductVariants>
                            <PDPButtons>
                                <ButtonYellow><ButtonText>Add to Cart</ButtonText></ButtonYellow>
                                <BuyNowButton><ButtonText>Buy Now</ButtonText></BuyNowButton>
                            </PDPButtons>
                            <P3>Free, fast shipping. Always.</P3>
                            <div className="pdp">
                                <Accordion accordionData={[{ title: "Product Details", content: text.productDetails }]} />
                                <Accordion accordionData={[{ title: "Read the Reviews", content: userReviews }]} />
                            </div>
                        </PDPDetails>
                    </Flex>
                </FullPageContainer>
            </BGWhite >
        );
    }

};

const PDPImages = styled.div`
    flex: 1;
    padding: 20px;

    @media ${device.tablet} {
        display: none;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    border: none;
    padding: 1px;
    @media ${device.tablet} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-height: 500px;
        width: auto;
    }
`;

const PDPDetails = styled.div`
    position: sticky;
    height: fit-content;
    top: 72px;
    flex: 1;
    padding: 20px;

    > * {
        padding: 20px;
    }

    @media ${device.mobile} {
        padding: 5px;
    }
    
`;

const PDPCarousel = styled(Carousel)`
    display: none;
    padding: 0;

    @media ${device.tablet} {
        display: block;
    }
`;

const ProductVariants = styled(Flex)`
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const PDPButtons = styled(Flex)`
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const BuyNowButton = styled(Button)`
    background: transparent;
    color: #004669;
    box-sizing: border-box;
    border: 2px solid #004669;

    &:hover {
        background: #004669;

        p {
            color: #F9F9FE;
        }
    }
`;

const VariantCircleBorder = styled.div`
    margin: 3px;
    border-radius: 40px;
    border: solid rgba(0, 0, 0, 0) 1px;

    &:hover {
        cursor: pointer;
        border: solid gray 1px;
    }

    &.selected {
        border: solid black 1px;
    }
`;

export default PDP;

// Text from App.js
const text = {
    "customerName": "Happy Customer",
    "userReviews": [
        { "name": "Fred", "score": 5, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!" },
        { "name": "Fred", "score": 3, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!" },
        { "name": "Fred", "score": 2, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!" }
    ],
    "productDetails": "They are suspenders :)"
}