import React from 'react';
import { H1, H2, H3, P } from './styles';

class App extends React.Component {
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
      <div className="App" >
        <header className="App-header">
          {/* <H1>This is an H1</H1>
          <H2>This is an H2</H2>
          <H3>This is an H3</H3>
          <P>This is a P</P> */}
        </header>
        {
          this.state.products.map((product, index) => {
            return (
              // product keys:
              // {id, availableForSale, createdAt, updatedAt, descriptionHtml, description, handle, productType, title, vendor, publishedAt, onlineStoreUrl, options, images, variants, refetchQuery, type, nextPageQueryAndPath, hasNextPage, hasPreviousPage, variableValues}
              // product image keys:
              // {id, src, altText, type, nextPageQueryAndPath, hasNextPage, hasPreviousPage, variableValues}
              <div>
                <H1>Product: {product.title}</H1>
                <H3>{product.productType}</H3>
                <H3>{product.description}</H3>
                <img src={product.images[0].src} width="100"></img>
                <hr></hr>
              </div>
            )
          })
        }

      </div >
    );
  }

}

export default App;
