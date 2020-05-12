import React from 'react';
import NotFound from '../NotFound';
import { H1, BGBlue, TextCenter, Section } from '../styles';
import Text from '../components/Generics/Text';
import TextImage from '../components/Generics/TextImage';
import ImageText from '../components/Generics/ImageText';
import FullWidthImage from '../components/Generics/FullWidthImage';
import { RichText } from 'prismic-reactjs';

class GenericPage extends React.Component { 
    state = {
        doc: null,
        err: null,
      };
    
    componentWillMount() {
        this.fetchPage(this.props);
    }
  
    componentWillReceiveProps(props) {
        this.fetchPage(props);
    }

    componentDidUpdate() {
        this.fetchPage(this.props);
    }
  
    fetchPage = props => {
        console.log(props);
        if (props.prismicCtx) {
            props.prismicCtx.api
            .getByUID('generic_page', props.uid)
            .then((doc, err) => {
                if (err) {
                    this.setState(() => ({ err }));
                } else if (doc) {
                    this.setState(() => ({ doc }));
                }
                else {
                    this.setState(() => ({err: "Not Found"}))
                }

            });
        }
    };

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
                    <H1>Loading...</H1>
                </TextCenter>
            </Section>
        </BGBlue>
    )
}

export default GenericPage;