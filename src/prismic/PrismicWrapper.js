import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic_configuration';
import App from '../App';

class BetterThanBelts extends React.Component {
  state = {
    prismicCtx: null,
  };

  componentDidMount() {
    this.buildContext()
      .then(prismicCtx => {
        this.setState({ prismicCtx });
      })
      .catch(e => {
        console.error(
          `Cannot contact the API, check your prismic configuration:\n${e}`
        );
      });
  }

  buildContext() {
    const accessToken = PrismicConfig.accessToken;
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(
      api => ({
        api,
        endpoint: PrismicConfig.apiEndpoint,
        accessToken,
        linkResolver: PrismicConfig.linkResolver,
        toolbar: this.refreshToolbar,
      })
    );
  }

  render() {
    return <App prismicCtx={this.state.prismicCtx} />;
  }
}

export default BetterThanBelts