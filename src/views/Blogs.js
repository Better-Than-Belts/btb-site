import React from 'react';
import styled from 'styled-components';
import { H1, P, P2, TextCenter, Section, Flex } from '../styles';
import square from '../images/Square.png';
import { Link } from 'react-router-dom';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

class Blogs extends React.Component { 
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
        if (props.prismicCtx) {
            props.prismicCtx.api
            .query(
                Prismic.Predicates.at('document.type', 'blog'))
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
        return (
            <Section>
                <TextCenter>
                    <H1>Blogs</H1>
                </TextCenter>
                <BlogPreviews>
                    {this.state.doc ? this.state.doc.results.map((blog, index) => {return ( <BlogPreview {...blog}/> ); }) : <div>No blogs :(</div>}
                </BlogPreviews>
            </Section>
        );
    }

}

export default Blogs;

const BlogPreview = (props) => {
    return (
        <BlogPreviewContainer to={'/blog/' + props.uid}>
            <BlogPreviewImage url={props.data.hero.url ? props.data.hero.url : square}/> 
            <BlogPreviewText>
                <P2>{RichText.asText(props.data.title)}</P2>
            </BlogPreviewText>
        </BlogPreviewContainer>
    );
};

const BlogPreviewImage = styled.div`
    height: 300px;
    padding: 20px;
    grid-column: span 12 / auto;
    background: url(${props => (props.url)}) center center / cover no-repeat;
    background-position: center center;
    background-repeat: no-repeat;
`;

const BlogPreviewText = styled.div`
    padding: 20px;
    min-height: 140px;
    background: #DDD;
`;
    

const BlogPreviews = styled(Flex)`
    flex-wrap: wrap;
    margin-top: 60px;
`;

const BlogPreviewContainer = styled(Link)`
    flex: 33%;
    max-width: 33%;
    padding: 30px;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;