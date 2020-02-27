import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import { Flex, Section, TextCenter, H1, P } from '../styles';
import styled from 'styled-components';
import ReadyToShop from '../components/Home/ReadyToShop';
import { device } from '../device';


const FAQ = (props) => {
    return (
        <Section>
            <PageTitle>
                <TextCenter>
                    <H1>{props.title}</H1>
                </TextCenter>
            </PageTitle>
            {
            props.FAQSections.map((item, index) => {
                return (
                    <FAQSection>
                        <FAQSectionTitle>{item.title}</FAQSectionTitle>
                        <FAQAccordion><Accordion accordionData={item.questions}/></FAQAccordion>
                    </FAQSection>
                )
            })
            }
            
            <ReadyToShop />
        </Section>
    );
};

const FAQSection = styled(Flex)`
    margin-bottom: 60px;
    @media ${device.tablet} {
        display: block;
        padding: 0 30px;
    }
`;

const FAQSectionTitle = styled(P)`
    margin-inline-start: -1%;
    text-transform: uppercase;

    @media ${device.tablet} {
        margin-inline-start: auto;
    }
`;

const FAQAccordion = styled.div`

    max-width: 85%;

    @media ${device.tablet} {
        max-width: 100%;
    }
`;

const PageTitle = styled.div`
    padding: 80px 40px;
`;

export default FAQ;