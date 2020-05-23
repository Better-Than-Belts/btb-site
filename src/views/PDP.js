import React from 'react';
import { Flex, Button, FullPageContainer, A, H2, P, P3, ButtonText, ButtonYellow, Image, BGWhite, RouteLink } from '../styles';
import styled from 'styled-components';
import SuspenderSelector from '../components/PDP/SuspenderSelector';
import BeanieSelector from '../components/PDP/BeanieSelector';
import UserReview from '../components/PDP/UserReview';
import Accordion from '../components/Accordion/Accordion';
import { Carousel } from 'react-bootstrap';
import { device } from '../device';
import "./PDP.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../actions/CartActions';
import { RichText } from 'prismic-reactjs';

class PDP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentId: "",
            product: {},
            images: [],
            productVariants: [],
            collections: [],
            suspenders: [],
            checkout: { lineItems: [] },
            buyNowUrl: "",
            selectedVariant: "",
            doc: {}
        };
    }

    handleCart = (id) => {
        this.props.addItem(id);
    }

    componentDidMount() {
        this.props.client.collection.fetchAllWithProducts().then((res) => {
            let suspenders = res.find(col => col.title === "All Suspenders");
            this.props.client.collection.fetchWithProducts(suspenders.id, { productsFirst: 250 }).then((collection) => {
                this.setState({
                    collections: res,
                    suspenders: collection.products
                })
            })
        })
        this.props.client.product.fetch(this.props.id).then((res) => {
            this.setState({
                currentId: res.id,
                product: res,
                images: res.images,
                productVariants: res.variants,
                selectedVariant: res.variants[0]
            });
        }).then((res) => {
            // add Buy Now url
            this.props.client.checkout.create().then((res) => {
                let checkout = res;
                let variantId = this.state.product.variants[0].id
                if (checkout && checkout.id) {
                    const checkoutId = checkout.id;
                    let lineItemsToAdd = [];
                    let lineItem = { variantId, quantity: 1 }
                    lineItemsToAdd.push(lineItem);
                    this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((realRes) => {
                        this.setState({ buyNowUrl: realRes.webUrl })
                    });
                }
            })
        });
    }

    setProduct(selected) {
        this.props.client.checkout.create().then((res) => {
            let variantId = "";
            if (selected.handle && selected.handle !== "") {
                variantId = selected.variants[0].id
            } else {
                variantId = selected.id;
            }
            let checkout = res;
            if (checkout && checkout.id) {
                const checkoutId = checkout.id;
                let lineItemsToAdd = [];
                let lineItem = { variantId, quantity: 1 }
                lineItemsToAdd.push(lineItem);
                this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((realRes) => {
                    this.setState({ buyNowUrl: realRes.webUrl })
                });
            }
        }).then((res) => {
            if (selected.handle && selected.handle !== "") {
                this.setState({
                    currentId: selected.id,
                    product: selected,
                    images: selected.images,
                });
            } else {
                this.setState({
                    selectedVariant: selected
                })
            }
        });
    }

    render() {
        let userReviews = text.userReviews.map((item, index) => <UserReview {...item} />);
        let isSuspender = this.state.suspenders.find(item => this.state.currentId === item.id);
        let endImageIndex = 0;
        if (isSuspender) {
            endImageIndex = this.state.images.length - 1;
        } else {
            endImageIndex = this.state.images.length;
        }
        let price = this.state.productVariants.length > 0 ? this.state.productVariants[0].price : "";
        let isBeanie = this.state.product.handle === "better-beanie";
        let beanieVariants = isBeanie ? this.state.product.variants : [];
        return (
            <BGWhite>
                <FullPageContainer>
                    <Flex>
                        <PDPImages>
                            {
                                this.state.images.slice(0, endImageIndex).map((image, index) => {
                                    return (
                                        <ProductImage src={image.src} />
                                    )
                                })
                            }
                        </PDPImages>
                        <PDPDetails>
                            <PDPCarousel interval={this.state.images.length}>
                                {
                                    this.state.images.slice(0, endImageIndex).map((image, index) => {
                                        return (
                                            <Carousel.Item>
                                                <ProductImage src={image.src} />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </PDPCarousel>
                            <H2>{this.state.product.title} - {price}</H2>
                            {
                                isSuspender && this.state.suspenders.length > 0 &&
                                <ProductVariants>
                                    {
                                        this.state.suspenders.length > 0 && this.state.suspenders.map((variant, index) => {
                                            var iconImage = variant.images[variant.images.length - 1].src;
                                            return (
                                                <Link to={`/shop/${variant.id}`} onClick={() => this.setProduct(variant)}>
                                                    <VariantCircleBorder className={this.state.product.title === variant.title ? " selected" : ""}>
                                                        <SuspenderSelector {...variant} img={iconImage} />
                                                    </VariantCircleBorder>
                                                </Link>
                                            )
                                        })
                                    }
                                </ProductVariants>
                            }
                            {
                                isBeanie &&
                                <ProductVariants>
                                    {/* Ocean Blue */}
                                    <Link to={`/shop/${this.state.currentId}`} onClick={() => this.setProduct(beanieVariants[0])}>
                                        <VariantCircleBorder className={this.state.selectedVariant.id === beanieVariants[0].id ? "selected" : ""}>
                                            <BeanieSelector color="#0B79A9" />
                                        </VariantCircleBorder>
                                    </Link>
                                    {/* Natural */}
                                    <Link to={`/shop/${this.state.currentId}`} onClick={() => this.setProduct(beanieVariants[1])}>
                                        <VariantCircleBorder className={this.state.selectedVariant.id === beanieVariants[1].id ? "selected" : ""}>
                                            <BeanieSelector color="#E5DBD1" />
                                        </VariantCircleBorder>
                                    </Link>
                                    {/* Sunset Red */}
                                    <Link to={`/shop/${this.state.currentId}`} onClick={() => this.setProduct(beanieVariants[2])}>
                                        <VariantCircleBorder className={this.state.selectedVariant.id === beanieVariants[2].id ? "selected" : ""}>
                                            <BeanieSelector color="#CE4230" />
                                        </VariantCircleBorder>
                                    </Link>
                                    {/* Forest Green */}
                                    <Link to={`/shop/${this.state.currentId}`} onClick={() => this.setProduct(beanieVariants[3])}>
                                        <VariantCircleBorder className={this.state.selectedVariant.id === beanieVariants[3].id ? "selected" : ""}>
                                            <BeanieSelector color="#45AF51" />
                                        </VariantCircleBorder>
                                    </Link>
                                </ProductVariants>
                            }
                            <PDPButtons>
                                <AddToCartButtonDiv>
                                    <AddToCartButton><PDPButtonText>
                                        <RouteLink to={`/cart`} onClick={() => {
                                            isBeanie ? this.handleCart(this.state.selectedVariant.id) :
                                                this.handleCart(this.state.currentId)
                                        }}>Add to cart</RouteLink>
                                    </PDPButtonText></AddToCartButton>
                                </AddToCartButtonDiv>
                                <BuyNowButton>
                                    <A href={this.state.buyNowUrl}>
                                        <PDPButtonText>Buy now</PDPButtonText>
                                    </A>
                                </BuyNowButton>
                            </PDPButtons>
                            <P>{this.state.product.description}</P>

                            <P3>Free, fast shipping. Always.</P3>
                            <div className="pdp">
                                <Accordion accordionData={[{
                                    title: "product details title",
                                    content: "product details content"
                                }]} />
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
    padding: 5px;
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
    padding: 10px 20px;
    &:hover {
        background: #004669;
        p {
            color: #F9F9FE;
        }
    }
`;
const AddToCartButton = styled(ButtonYellow)`
    border: 2px solid #FDC16E;
    padding: 10px 20px;
`;
const AddToCartButtonDiv = styled.div`
    margin-right: 20px;
`;
const PDPButtonText = styled(ButtonText)`
    font-size: 16px;
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

// redux
const stateToPropertyMapper = (state) => {
    return {
        items: state
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        addItem: (id) => {
            dispatch(addItem(id))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
    (PDP)