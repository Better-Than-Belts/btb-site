import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import { Flex, Section, TextCenter, H1, P, BGWhite, BGBlue, Wave } from '../styles';
import styled from 'styled-components';
import ReadyToShop from '../components/Home/ReadyToShop';
import { device } from '../device';
import PrismicPage from '../prismic/PrismicPage';
import { RichText } from 'prismic-reactjs';


class FAQ extends React.Component {
    static pageType = 'faq';

    state = { faqsBySection: {} };

    componentDidMount() {
        var faqsBySection = {};

        this.props.doc.data.faqs.forEach(faq => {
            if(faq.section in faqsBySection) {
                faqsBySection[faq.section].push(faq);
            }
            else {
                faqsBySection[faq.section] = [];
                faqsBySection[faq.section].push(faq);
            }
        });

        this.setState({faqsBySection: faqsBySection});
    }

    render() {
        return(
            <div>
                <BGWhite>
                    <SectionContainer>
                        <PageTitle>
                            <TextCenter>
                                <H1>{RichText.asText(this.props.doc.data.faq_title)}</H1>
                            </TextCenter>
                        </PageTitle>
                    </SectionContainer>
                </BGWhite>
                <BGBlue>
                    <Section>
                        {
                            Object.keys(this.state.faqsBySection).map((key, value) => {
                                return (
                                    <FAQSection>
                                        <FAQSectionTitle>{key}</FAQSectionTitle>
                                        <FAQAccordion accordionData={this.state.faqsBySection[key]} />
                                    </FAQSection>
                                )
                            })
                        }
                    </Section>
                    <Wave />
                </BGBlue>
                <BGWhite>
                    <SectionContainer>
                        <ReadyToShop />
                    </SectionContainer>
            </BGWhite>
            </div>
        );

    };
};

export default PrismicPage(FAQ);

class FAQAccordion extends React.Component {

    state = { faqs: [] };

    componentDidMount() {
        var faqs = this.props.accordionData.map((item, index) => {
            return {
                title: RichText.asText(item.question),
                content: RichText.render(item.answer)
            }
        });

        this.setState({faqs: faqs});
    };

    render() {
        return <FAQAccordionContainer><Accordion accordionData={this.state.faqs}/></FAQAccordionContainer>
    }
}

// Styles
const SectionContainer = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    padding-right: 20px;
    padding-left: 20px;
`;

const FAQSection = styled(Flex)`
    margin-bottom: 60px;
    padding: 0 30px;
    @media ${device.tablet} {
        display: block;
    }
`;

const FAQSectionTitle = styled(P)`
    color: #F9F9FE;
    margin-inline-start: -1%;
    text-transform: uppercase;

    @media ${device.tablet} {
        margin-inline-start: auto;
        padding-bottom: 20px;
    }
`;

const FAQAccordionContainer = styled.div`
    max-width: 85%;
    
    @media ${device.tablet} {
        max-width: 100%;
    }
`;

const PageTitle = styled.div`
    padding: 130px 40px;
    @media ${device.tablet} {
        padding: 50px 30px;
    }
    @media ${device.mobile} {
        padding: 30px;
    }
`;