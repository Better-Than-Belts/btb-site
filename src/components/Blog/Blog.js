import React from 'react';
import styled from 'styled-components';
import landscape from '../../images/Landscape.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wave, H2, H4, P, BGWhite, Section } from '../../styles';
import Prismic from 'prismic-javascript';
import { device } from '../../device';
import NotFound from '../../NotFound';
import { RichText } from 'prismic-reactjs';

class Blog extends React.Component { 
    state = {
        doc: null,
        err: null,
      };
    
    componentWillMount() {
        this.fetchBlog(this.props);
    }
  
    componentWillReceiveProps(props) {
        this.fetchBlog(props);
    }
  
    fetchBlog = props => {
        if (props.prismicCtx && props.id) {
            props.prismicCtx.api
            .getByUID('blog', props.id)
            .then((doc, err) => {
                if (doc) {
                this.setState(() => ({ doc }));
                } else if (err) {
                this.setState(() => ({ err }));
                }
            });
        }
    };

    render() {
        return this.state.doc ? (
            <BGWhite>
                {
                this.state.doc.data.hero.url ? <HeroBG BG={this.state.doc.data.hero.url}>
                    <HeroWrapper>
                        <HeroTitle titleWhite={this.state.doc.data.title_white}>
                            <H2>{RichText.asText(this.state.doc.data.title)}</H2>
                            <H4>by {RichText.asText(this.state.doc.data.author)}</H4>
                            <Date>{this.state.doc.data.date}</Date>
                        </HeroTitle>
                    </HeroWrapper>
                    <Wave />
                </HeroBG> : 
                <HeroWrapper>
                <HeroTitle titleWhite={this.state.doc.data.title_white}>
                    <H2>{RichText.asText(this.state.doc.data.title)}</H2>
                    <H4>by {RichText.asText(this.state.doc.data.author)}</H4>
                    <Date>{this.state.doc.data.date}</Date>
                </HeroTitle>
            </HeroWrapper> 
            }
                <BlogSection>
                    <P>
                        {RichText.render(this.state.doc.data.blog_content)}
                    </P>
                </BlogSection>
            </BGWhite>
          ) : <NotFound /> 
        }
    }

// HeroBG defined here to utilize props
const HeroBG = styled.div`
background-image: url(${props => props.BG});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
@media ${device.tablet} {
    background-image: url(${props => props.BG});
    background-size: cover;
}
`;

const Date = styled(P)`
    color: inherit;
`;

// Styles
const HeroWrapper = styled.div`
    margin: auto;
    position: relative;
    width: 75%;
    padding: 10px;
    text-align: center;
    height: 550px;
    @media ${device.tablet} {
        height: 600px;
        width: 100%;
    }
    @media ${device.mobile} {
        height: 400px;
    }
`;

const HeroTitle = styled.div`
    color: ${props => (props.titleWhite ? 'white': 'auto')};
    margin: 0;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const BlogSection = styled(Section)`
    padding-top: 0;
    max-width: 800px;
`;

export default Blog;