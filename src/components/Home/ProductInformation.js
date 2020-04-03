import React from 'react';
import { BGGray, Section, H2 } from '../../styles';
import ProductInformationShared from '../Shared/ProductInformationShared';

const ProductInformation = (props) => {
    return (
        <BGGray>
            <Section>
                <H2>{props.productInformationTitle}</H2>
                <ProductInformationShared {...props} />
            </Section>
        </BGGray>
    );
};

export default ProductInformation;