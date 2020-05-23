import React from 'react';
import NotFound from '../NotFound';
import { H1, BGBlue, TextCenter, Section, H3 } from '../styles';
import Text from '../components/Generics/Text';
import TextImage from '../components/Generics/TextImage';
import ImageText from '../components/Generics/ImageText';
import FullWidthImage from '../components/Generics/FullWidthImage';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';

class GenericPage extends React.Component { 
    state = {
        doc: null,
        err: null,
      };
    
    componentWillMount() {
        window.scrollTo(0, 0);
        this.fetchPage(this.props);
    }
  
    componentWillReceiveProps(props) {
        this.fetchPage(props);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.uid !== this.props.uid) {
            this.setState({ doc: null, err: null})
            window.scrollTo(0, 0);
        }
    }
  
    fetchPage = props => {
        if (props.prismicCtx) {
            props.prismicCtx.api.query(
                Prismic.Predicates.at('my.generic_page.uid', props.uid),
                { lang : '*' }
            ).then(res => {
                if(res.results_size && res.results_size > 0) {
                    this.setState(() => ({ doc: res.results[0]}))
                }
                else {
                    this.setState(() => ({ err: 'Not Found' }));
                }
            });
        }};

    render() {
        return this.state.doc ? 
            (<Section>
                <TextCenter>
                    <H1>
                        { RichText.asText(this.state.doc.data.title) }
                    </H1>
                    {
                    this.state.doc.data.body.map(
                        (section, index) => {
                        return (
                            section.slice_type === "text" ? <Text {...section.primary}/> 
                                : section.slice_type === "image-text" ? <ImageText {...section.primary}/> 
                                    : section.slice_type === "text-image" ? <TextImage {...section.primary}/>
                                        : section.slice_type === "full-width_image" ? <FullWidthImage {...section.primary}/> 
                                            : <br/>
                            );
                        })
                    }
                </TextCenter>
            </Section>) : this.state.err ? (<NotFound />) : (<Loading />);
    }

}

const Loading = () => {
    return (
        <BGBlue>
            <Section>
                <TextCenter>
                    <H3>Loading...</H3>
                </TextCenter>
            </Section>
        </BGBlue>
    )
}

export default GenericPage;