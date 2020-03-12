import React from 'react';
import styled from 'styled-components';
import { H2, P, BGGray, Section } from '../../styles';

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida semper augue sagittis vulputate. Quisque lobortis pellentesque mi, eget placerat leo porttitor eget. Proin at volutpat justo, pretium finibus lorem. Curabitur congue consectetur enim ullamcorper aliquam."

const content2 = "Mauris vehicula enim at diam pulvinar, at posuere est mattis. Etiam interdum risus pulvinar tristique volutpat. Suspendisse pharetra lectus vitae velit facilisis, vehicula vehicula augue rutrumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida semper augue sagittis vulputate. Quisque lobortis pellentesque mi, eget placerat leo porttitor eget. Proin at volutpat justo, pretium finibus lorem. Curabitur congue consectetur enim ullamcorper aliquam."

const OurBackground = (props) => {
    return (
        <BGGray class="container">
            <Section>
                <OurBackgroundTitle>Our Background</OurBackgroundTitle>
                <OurBackgroundContent>{content}</OurBackgroundContent>
                <br />
                <OurBackgroundContent>{content2}</OurBackgroundContent>
            </Section>
        </BGGray>
    );
};

// Styles
const OurBackgroundTitle = styled(H2)`
    padding-bottom: 30px;
`

const OurBackgroundContent = styled(P)`
    line-height: 30px;
`


export default OurBackground;