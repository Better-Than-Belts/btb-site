import React from 'react';
import { H1, H3 } from '../../styles';


class Product extends React.Component {

    render() {

        // product keys:
        // {id, availableForSale, createdAt, updatedAt, descriptionHtml, description, handle, productType, title, vendor, publishedAt, onlineStoreUrl, options, images, variants, refetchQuery, type, nextPageQueryAndPath, hasNextPage, hasPreviousPage, variableValues}

        // product image keys:
        // {id, src, altText, type, nextPageQueryAndPath, hasNextPage, hasPreviousPage, variableValues}
        return (
            <div className="product">
                <H1 className="product-title">{this.product.title}</H1>
                <br></br>
                {this.props.product.images.length ?
                    <img src={this.props.product.images[0].src} alt={this.props.product.title} width="100" /> : null}
                <H3 className="product-description">{this.props.product.description}</H3>
                <hr></hr>
            </div>
        )
    }
}

export default Product;