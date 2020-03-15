import React from 'react';
import { Flex, Button, MockImagePortrait, FullPageContainer, H2, P, ButtonText } from '../styles';
import styled from 'styled-components';
import VariantSelector from '../components/PDP/ColorSelector';
import UserReview from '../components/PDP/UserReview';
import Accordion from '../components/Accordion/Accordion';
import { Carousel } from 'react-bootstrap';
import { device } from '../device';

class PDP extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedVariant : this.props.variants[0]
        };
        this.setVariant = this.setVariant.bind(this);
    }

    setVariant(variant) {
        this.setState({selectedVariant: variant});
    }

    render() {
        let userReviews = this.props.userReviews.map((item, index) => <UserReview {...item}/>);
        return (
            <FullPageContainer>
                <Flex>
                    <PDPImages>
                        <PDPImage />
                        <PDPImage />
                        <PDPImage />
                        <PDPImage />
                        <PDPImage />
                        <PDPImage />
                    </PDPImages>

                    
                    <PDPDetails>
                        <PDPCarousel interval={null}>
                            <Carousel.Item><PDPImage /></Carousel.Item>
                            <Carousel.Item><PDPImage /></Carousel.Item>
                        </PDPCarousel>
                        <H2>{this.props.title} - {this.state.selectedVariant.price}</H2> 
                        <P>{this.props.description}</P>
                        <ProductVariants>
                            {
                                this.props.variants.map((variant, index) => {
                                    return (
                                        <VariantCircleBorder onClick={() => this.setVariant(variant)} className={this.state.selectedVariant === variant ? " selected" : ""}>
                                            <VariantSelector {...variant} />
                                        </VariantCircleBorder>
                                    )
                                })
                            }
                        </ProductVariants>
                        <PDPButtons>
                            <Button><ButtonText>Add to Cart</ButtonText></Button>
                            <Button><ButtonText>Buy Now</ButtonText></Button>
                        </PDPButtons>
                        <P>Free, fast shipping. Always.</P>
                        <div>
                        <Accordion accordionData={[{title: "Sizing", content: "Sizing chart placeholder"}]}/>
                        <Accordion accordionData={[{title: "Product Details", content: this.props.productDetails}]}/>
                        <Accordion accordionData={[{title: "Read the Reviews", content: userReviews}]}/>
                        </div>
                    </PDPDetails>
                </Flex>
            </FullPageContainer>
           
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

const PDPImage = styled(MockImagePortrait)`
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