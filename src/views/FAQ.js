import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import { Flex, Section, TextCenter, H1, P, BGWhite, BGBlue, Wave } from '../styles';
import styled from 'styled-components';
import ReadyToShop from '../components/Home/ReadyToShop';
import { device } from '../device';


const FAQ = (props) => {
    return (
        <div>
            <BGWhite>
                <SectionContainer>
                    <PageTitle>
                        <TextCenter>
                            <H1>{props.title}</H1>
                        </TextCenter>
                    </PageTitle>
                </SectionContainer>
            </BGWhite>
            <BGBlue>
                <Section>
                    {
                        props.sections.map((item, index) => {
                            return (
                                <FAQSection>
                                    <FAQSectionTitle>{item.title}</FAQSectionTitle>
                                    <FAQAccordion><Accordion accordionData={item.questions} /></FAQAccordion>
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

const FAQAccordion = styled.div`
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

export default FAQ;