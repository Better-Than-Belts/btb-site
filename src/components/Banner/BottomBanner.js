import React from 'react';
import styled from 'styled-components';
import PrismicRenderable from '../../prismic/PrismicRenderable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P } from '../../styles';
import { RichText } from 'prismic-reactjs';

class BottomBanner extends React.Component{
    static pageType = 'bottom_banner'; 
    
    constructor() {
        super();
        this.state = {display: true}
    }
    
    clearBanner = () => {
        this.setState({display: false});
    }
    
    render() {
        return (
            this.state.display ?
            <BannerContainer bgColor={this.props.doc.data.background_color} sticky={this.props.doc.data.sticky}>
                <ClearButton icon='times' onClick={this.clearBanner} color={this.props.doc.data.text_color}/>
                <BannerContent color={this.props.doc.data.text_color}>
                    {RichText.render(this.props.doc.data.content)}
                </BannerContent>
            </BannerContainer> : <div></div>
        );
    }
};

export default PrismicRenderable(BottomBanner);

// Styles
const BannerContainer = styled.div`
    padding: 5px;
    text-align: center;
    background-color: ${props => props.bgColor};
    bottom: 0;
    z-index: 1;
    position: ${props => props.sticky ? 'sticky' : 'relative'};
`;

const BannerContent = styled(P)`
    color: ${props => props.color};
    font-size: 16px;
`;

const ClearButton = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${props => props.color};
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
        filter: brightness(85%);
        cursor: pointer;
    }
`;



