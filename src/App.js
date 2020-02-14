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
      console.log("fetching all products");
      console.log(res);
      this.setState({
        products: res,
      });
      console.log(this.state.products);
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
          <H1>This is an H1</H1>
          <H2>This is an H2</H2>
          <H3>This is an H3</H3>
          <P>This is a P</P>
        </header>
        {
          this.state.products.map((product, index) => {
            return (
              <h3>{product}</h3>
            )
          })
        }

      </div>
    );
  }

}

export default App;
