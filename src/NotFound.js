import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Section, BGBlue, TextCenter, H1, P, Wave, BGWhite, ButtonYellow, ButtonText } from './styles';

const NotFound = () => {
    return (
        <div>
            <BGBlue>
                <Section>
                    <TextCenter>
                        <NotFoundH1>
                            Ooops.
                        </NotFoundH1>
                        <NotFoundP>The link you clicked may be broken or the page may have been removed.</NotFoundP>
                    </TextCenter>
                </Section>
                <Wave />
            </BGBlue>
            <BGWhite>
                <BackHomeSection>
                    <TextCenter>
                        <Link to="/">
                            <ButtonYellow>
                                <ButtonText>
                                    Back to Home
                                </ButtonText>
                            </ButtonYellow>
                        </Link>
                    </TextCenter>
                </BackHomeSection>
            </BGWhite>
        </div>
    )
}

// Styles
const NotFoundH1 = styled(H1)`
    margin-bottom: 60px;
`;

const NotFoundP = styled(P)`
    max-width: 300px;
    margin: auto;
`;

const BackHomeSection = styled(Section)`
    padding: 50px 20px;
`;

export default NotFound;