import React from 'react';
import { Flex, Button, MockImagePortrait, FullPageContainer, H2, P, ButtonText, ButtonYellow, BGWhite } from '../styles';
import styled from 'styled-components';
import VariantSelector from '../components/PDP/ColorSelector';
import UserReview from '../components/PDP/UserReview';
import Accordion from '../components/Accordion/Accordion';
import { Carousel, Dropdown } from 'react-bootstrap';
import { device } from '../device';
import "./PDP.css";

class PDP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedVariant: text.variants[0],
            dropdownValue: "Select your size",
            product: {},
            images: [],
            productVariants: {}
        };
        this.setVariant = this.setVariant.bind(this);
    }

    componentDidMount() {
        this.props.client.product.fetch(this.props.id).then((res) => {
            this.setState({
                product: res,
                images: res.images,
                productVariants: res.variants[0]
            });
        });
    }

    setVariant(variant) {
        this.setState({ selectedVariant: variant });
    }

    changeDropdownValue = event => {
        const value = event.target.innerHTML;
        this.setState({ dropdownValue: value });
    }

    render() {
        let userReviews = text.userReviews.map((item, index) => <UserReview {...item} />);
        return (
            <BGWhite>
                <FullPageContainer>
                    <Flex>
                        <PDPImages>
                            {
                                this.state.images.map((image, index) => {
                                    return (
                                        <Image src={image.src} />
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
                                                <Image src={image.src} />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </PDPCarousel>
                            <H2>{this.state.product.title} - {this.state.productVariants.price}</H2>
                            <P>{this.state.product.description}</P>
                            <ProductVariants>
                                {
                                    text.variants.map((variant, index) => {
                                        return (
                                            <VariantCircleBorder onClick={() => this.setVariant(variant)} className={this.state.selectedVariant === variant ? " selected" : ""}>
                                                <VariantSelector {...variant} />
                                            </VariantCircleBorder>
                                        )
                                    })
                                }
                            </ProductVariants>
                            <SizeDropdown>
                                <SizeToggle className="text-left" id="size-button" >
                                    {this.state.dropdownValue}
                                </SizeToggle>
                                <SizeMenu>
                                    <SizeOption onClick={this.changeDropdownValue}>0/S (5'3-6'3)</SizeOption>
                                </SizeMenu>
                            </SizeDropdown>
                            <PDPButtons>
                                <ButtonYellow><ButtonText>Add to Cart</ButtonText></ButtonYellow>
                                <BuyNowButton><ButtonText>Buy Now</ButtonText></BuyNowButton>
                            </PDPButtons>
                            <P>Free, fast shipping. Always.</P>
                            <div className="pdp">
                                <Accordion accordionData={[{ title: "Sizing", content: "Sizing chart placeholder" }]} />
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

const SizeDropdown = styled(Dropdown)`
    display: flex;
`;
const SizeToggle = styled(Dropdown.Toggle)`
    display: block;
    width: 100%;
    min-height: 55px;
    font-family: "Libre Franklin", sans-serif;
    font-size: 20px;
    line-height: 30px;
    background-color: transparent;
    color: #0C1527;
    border: 1px solid #004669;
    box-sizing: border-box;
    border-radius: 0px;
    :after {
        height: 100%;
        margin-top: 10px;
        float: right;
    }
`;
const SizeMenu = styled(Dropdown.Menu)`
    display: block;
    background-color: #F9F9FE;
    border-radius: 0px;
    border: 1px solid #004669;
`;
const SizeOption = styled(Dropdown.Item)`
    font-family: "Libre Franklin", sans-serif;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: #004669;
    display: block;
    width: 100%;
`;

const PDPImages = styled.div`
    flex: 1;
    padding: 20px;

    @media ${device.tablet} {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    border: none;
    padding: 1px;
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
    "title": "Flamingo",
    "description": "Fine, you asked for a really cool pair of suspenders, so here they are. Take it or leave it. Or take it. Our classic three stripe in Rust / Navy",
    "variants": [
        {
            "name": "Red",
            "color": "#ff0000",
            "price": "49.00"
        },
        {
            "name": "Blue",
            "color": "#0000ff",
            "price": "49.00"
        },
        {
            "name": "Green",
            "color": "#00ff00",
            "price": "49.00"
        },
        {
            "name": "Powder Blue",
            "color": "#b0e0e6",
            "price": "49.00"
        },
        {
            "name": "Powder Blue",
            "color": "#b0e0e6",
            "price": "49.00"
        },
        {
            "name": "Gold",
            "color": "#ffd700",
            "price": "49.00"
        }
    ],
    "customerName": "Happy Customer",
    "userReviews": [{ "name": "Fred", "score": 5, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!" },
    { "name": "Fred", "score": 3, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!" },
    { "name": "Fred", "score": 2, "body": "Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!" }],
    "productDetails": "They are suspenders :)"
}