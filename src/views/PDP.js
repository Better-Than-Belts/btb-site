import React from 'react';
import { Flex, Button, H3, MockImagePortrait, FullPageContainer, H2, P, ButtonText } from '../styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VariantSelector from '../components/PDP/ColorSelector';

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
        return (
            <FullPageContainer>
                <Flex>
                    <PDPImages>
                        <PDPImage><MockImagePortrait /></PDPImage>
                        <PDPImage><MockImagePortrait /></PDPImage>
                        <PDPImage><MockImagePortrait /></PDPImage>
                        <PDPImage><MockImagePortrait /></PDPImage>
                        <PDPImage><MockImagePortrait /></PDPImage>
                        <PDPImage><MockImagePortrait /></PDPImage>
                    </PDPImages>
                    <PDPDetails>
                        <H2>{this.props.title} - {this.state.selectedVariant.price}</H2> 
                        <P>{this.props.description}</P>
                        <ProductVariants>
                            {
                                this.props.variants.map((variant, index) => {
                                    return (
                                        <VariantCircleBorder onClick={() => this.setVariant(variant)} className={this.state.selectedVariant == variant ? " selected" : ""}>
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
                    </PDPDetails>
                </Flex>
            </FullPageContainer>
           
        );
    }
    
};

const PDPImages = styled(Flex)`
    flex: 2;
    flex-wrap: wrap;
    padding: 20px;
`;

const PDPImage = styled.div`
    width: 50%;
    border: none;
    padding: 1px;
`;

const PDPDetails = styled.div`
    position: sticky;
    height: fit-content;
    top: 72px;
    flex: 1;
    padding: 20px;
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

// Styles
const Stars = styled(Flex)`
    max-width: 200px;
    margin: 0 auto;
    padding-bottom: 10px;
`;

const Star = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #C4C4C4;
`;


export default PDP;