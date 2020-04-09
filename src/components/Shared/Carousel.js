import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { P } from '../../styles';

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
        return (
            <CarouselDiv className="row">
                <CarouselButton onClick={this.previousSlide}>
                    <Arrow icon='arrow-left' size="2x" />
                </CarouselButton>
                <ImgDiv>
                    <img src={this.state.imgUrls[this.state.currentImageIndex]} width="250px" />
                    <ImgText>{this.state.imgTexts[this.state.currentImageIndex]}</ImgText>
                </ImgDiv>
                <CarouselButton onClick={this.nextSlide}>
                    <Arrow icon='arrow-right' size="2x" />
                </CarouselButton>
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
    align-items: center;
    padding: 10px;
`;

const Arrow = styled(FontAwesomeIcon)`
    color: #F9F9FE;
`;

const ImgText = styled(P)`
    text-align: center;
    padding: 0 10px 10px 10px;
    color: #F9F9FE;
`;

const ImgDiv = styled.div`
    width: 250px;
    padding: 5px;
`;

export default Carousel;

