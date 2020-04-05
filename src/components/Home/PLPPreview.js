import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BGGray, Section, Button, ButtonText, Flex, ImageContainer, Image } from '../../styles';

const PLPPreview = (props) => {

    return (
        <BGGray>
            <Section>
                <Flex>
                    {props.plp_preview_images.map((item, index) => {
                        console.log(item);
                        return (
                            <ImageContainer>
                                <Image src={item.plp_preview_image.url} />
                            </ImageContainer>)
                    })}
                </Flex>
                <Link to="/shop">
                    <ShopNow>
                        <ButtonText>Shop Now</ButtonText>
                    </ShopNow>
                </Link>
            </Section>
        </BGGray>
    );
};

// Styles
const ShopNow = styled(Button)`
    margin: 0 auto;
    margin-top: 50px;
    display: block;
`;

export default PLPPreview;