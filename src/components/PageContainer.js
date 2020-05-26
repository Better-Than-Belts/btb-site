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
import { render } from '@testing-library/react';
import { getAllReviews } from '../judgeme/JudgeMeUtils';
import { device } from '../device';

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopifyClient: props.client,
            prismicCtx: props.prismicCtx,
            reviews: [],
            reviewsLoading: true
        }
    }

    componentDidMount() {
        getAllReviews().then(res => {
            this.setState(() => ({ reviews: res, reviewsLoading: false }))
        });
        this.setState({prismicCtx: this.props.prismicCtx })
    }
    
    render() {
        return (
            <div>
            <Router>
                <ScrollToTop />
                <TopBanner {...this.props} />
                <Nav {...this.props} />
                <StickyNavPadding>
                    <Switch>
                        <Route path="/"
                          exact={true}
                          render={() =>
                              <Home {...this.props} />
                          } />
                        <Route path="/shop/search/:query"
                          exact={true}
                          render={(props) =>
                              <PLP {...props} query={props.match.params.query} client={this.state.shopifyClient} />
                          } />
                        <Route path="/shop"
                            exact={true}
                            render={(props) =>
                                <PLP {...this.props} client={this.state.shopifyClient} reviews={this.state.reviews}/>
                            } />
                        <Route path="/shop/:id"
                            exact={true}
                            render={(props) =>
                                <PDP {...props} id={props.match.params.id} client={this.state.shopifyClient} prismicCtx={this.state.prismicCtx} reviews={this.state.reviews}/>
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
                                <Blogs prismicCtx={this.state.prismicCtx} />
                            } />
                        <Route path="/blog/:id"
                            exact={true}
                            render={(props) =>
                                <Blog id={props.match.params.id} prismicCtx={this.state.prismicCtx} />
                            } />
                        <Route path="/faq"
                            exact={true}
                            render={() =>
                                <FAQ {...this.props} />
                            } />
                        <Route path="/cart"
                            exact={true}
                            render={() =>
                                <Cart client={this.state.shopifyClient} prismicCtx={this.state.prismicCtx} />
                            } />
                        <Route path="/:uid"
                            exact={true}
                            render={(props) =>
                                <GenericPage uid={props.match.params.uid} prismicCtx={this.state.prismicCtx} />
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