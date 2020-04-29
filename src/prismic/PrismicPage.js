import React from 'react';
import NotFound from '../NotFound';

export default Wrapped =>
  class PrismicPage extends React.Component {
    state = {
      doc: null,
      err: null,
    };

    componentWillMount() {
      this.fetchPage(this.props);
    }

    componentWillReceiveProps(props) {
      this.fetchPage(props);
    }

    fetchPage = props => {
      if (props.prismicCtx) {
        props.prismicCtx.api.getByUID(
          Wrapped.pageType,
          Wrapped.pageType,
          {},
          (err, doc) => {
            if (err) {
              this.setState(() => ({ err }));
            } else if (doc) {
              this.setState(() => ({ doc }));
            }
          }
        );
      }
    };

    render() {
      return this.state.doc ? (
        <Wrapped doc={this.state.doc} />
      ) : 
        this.state.err ? (
          <NotFound />
        ) : null;
    }
  };