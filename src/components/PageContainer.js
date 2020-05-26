import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import PDP from '../views/PDP';
import PLP from '../views/PLP';
import OurStory from '../views/OurStory';
import OurProduct from '../views/OurProduct';
import FAQ from '../views/FAQ';
import Blogs from '../views/Blogs';
import GenericPage from '../views/GenericPage';
import Blog from '../components/Blog/Blog';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Cart from '../views/Cart';
import TopBanner from './Banner/TopBanner';
import BottomBanner from './Banner/BottomBanner';
import { device } from '../device';

class PageContainer extends React.Component {
    state = {
        collection: [],
        products: []
    }

    componentDidMount() {
        this.props.client.collection.fetchAllWithProducts().then((res) => {
            let items = res.find(col => col.title === "All Products");
            this.setState({
                collections: res,
                products: items.products
            });
        })
    }

    render() {
        const shopifyClient = this.props.client;
        const prismicCtx = this.props.prismicCtx;
        return (
            <div>
                <Router>
                    <ScrollToTop />
                    <TopBanner {...this.props} />
                    <Nav {...this.props} prismicCtx={prismicCtx} />
                    <Route path="/"
                        exact={true}
                        render={() =>
                            <Home {...this.props} />
                        } />
                    <StickyNavPadding>
                        <Switch>
                            <Route path="/shop/search/:query"
                                exact={true}
                                render={(props) =>
                                    <PLP {...props} query={props.match.params.query} client={shopifyClient} />
                                } />
                            <Route path="/shop"
                                exact={true}
                                render={(props) =>
                                    <PLP {...props} client={shopifyClient} products={this.state.products} collections={this.state.collections} />
                                } />
                            <Route path="/shop/:id"
                                exact={true}
                                render={(props) =>
                                    <PDP {...props} id={props.match.params.id} client={shopifyClient} prismicCtx={prismicCtx} />
                                } />
                            <Route path="/why-suspenders"
                                exact={true}
                                render={() =>
                                    <OurProduct {...this.props} />
                                } />
                            <Route path="/our-story"
                                exact={true}
                                render={() =>
                                    <OurStory {...this.props} />
                                } />
                            <Route path="/blog"
                                exact={true}
                                render={() =>
                                    <Blogs prismicCtx={prismicCtx} />
                                } />
                            <Route path="/blog/:id"
                                exact={true}
                                render={(props) =>
                                    <Blog id={props.match.params.id} prismicCtx={prismicCtx} />
                                } />
                            <Route path="/faq"
                                exact={true}
                                render={() =>
                                    <FAQ {...this.props} />
                                } />
                            <Route path="/cart"
                                exact={true}
                                render={() =>
                                    <Cart client={shopifyClient} prismicCtx={prismicCtx} />
                                } />
                            <Route path="/:uid"
                                exact={true}
                                render={(props) =>
                                    <GenericPage uid={props.match.params.uid} prismicCtx={prismicCtx} />
                                } />
                        </Switch>
                        <Footer {...this.props} />
                    </StickyNavPadding>
                    <BottomBanner {...this.props} />
                </Router>
            </div>
        )
    }

};

const StickyNavPadding = styled.div`
    padding-top: 40px;
    background-color: #F9F9FE;

    @media ${device.tablet} {
        padding-top: 0;
    }
`;

export default PageContainer;