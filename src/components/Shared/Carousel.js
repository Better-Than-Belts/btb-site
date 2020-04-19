import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { P } from '../../styles';
import Dots from 'react-carousel-dots';

// Pass `icons` through props
// Example usage:
// <Carousel icons={[MadeInAmericaIcon, FiveStarsIcon, FastShippingIcon, StrongIcon]} />
class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            imgUrls: this.props.icons,
            imgTexts: this.props.texts
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const ImgText = styled(P)`
            text-align: center;
            padding: 10px 10px 10px 10px;
            color: ${this.props.textColor};
            width: ${this.props.imageWidth};
        `;

        return (
            <CarouselDiv>
                <CarouselButton onClick={this.previousSlide}>
                    <FontAwesomeIcon icon='arrow-left' color={this.props.arrowColor} size="2x" />
                </CarouselButton>
                <ImgDiv>
                    <img src={this.state.imgUrls[this.state.currentImageIndex]} width={this.props.imageWidth} />
                    <ImgText>
                        {this.state.imgTexts[this.state.currentImageIndex]}
                    </ImgText>
                </ImgDiv>
                <CarouselButton onClick={this.nextSlide}>
                    <FontAwesomeIcon icon='arrow-right' color={this.props.arrowColor} size="2x" />
                </CarouselButton>
                <CarouselDots length={this.state.imgUrls.length} active={this.state.currentImageIndex} margin="10px" />
            </CarouselDiv>
        );
    }
}

// Styles
const CarouselButton = styled.button`
    height: 100px;
    background-color: transparent;
    border: none;
`;

const CarouselDiv = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    padding: 10px;
`;

const ImgDiv = styled.div`
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const CarouselDots = styled(Dots)`
    margin-left: auto;
    margin-right: auto;
`;

export default Carousel;

