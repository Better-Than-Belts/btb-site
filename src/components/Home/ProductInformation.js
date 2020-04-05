import React from 'react';
import { RichText } from 'prismic-reactjs';
import { BGGray, Section, H2 } from '../../styles';
import ProductInformationShared from '../Shared/ProductInformationShared';

const ProductInformation = (props) => {
    const productInformationItems = props.product_information_items.map((item, index) => { return (<ProductInformationShared {...item} />) });

    return (
        <BGGray>
            <Section>
                <H2>{RichText.asText(props.product_information_title)}</H2>
                <ProductInformationShared {...props} />
            </Section>
        </BGGray>
    );
};

export default ProductInformation;