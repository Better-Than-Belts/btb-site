import React from 'react';
import Product from './Shopify/Product'

class ShopifyClient extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
            shop: {}
        };
    }

    componentDidMount() {
        this.props.client.product.fetchAll().then((res) => {
            this.setState({
                products: res,
            });
        });

        this.props.client.shop.fetchInfo().then((res) => {
            this.setState({
                shop: res,
            });
        });
    }

    render() {
        return (
            <div className="shopify-client" >
                {
                    this.state.products.map((product, index) => {
                        return (
                            <Product product={product} />
                        )
                    })
                }
            </div >
        );
    }
}

export default ShopifyClient;