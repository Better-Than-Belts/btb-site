import React from 'react';
import { BGWhite, P, RouteLink } from '../styles';
import Logo from '../images/logo.svg';
import CartIcon from '../images/CartIcon.svg';
import SearchIcon from '../images/SearchIcon.svg';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, FormControl } from 'react-bootstrap';
import { device } from '../device';
import navHamburgericon from '../images/NavHamburgerIcon.svg';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';

class NavRouter extends React.Component {
    static pageType = 'navbar';

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            expanded: false,
            search: false,
            searchInput: "",
            doc: null,
            err: null
        };
        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch = () => {
        this.setState({ search: !this.state.search })
    }

    searchClick = () => {
        if (this.state.search) {
            this.toggleSearch();

        } else {
            this.toggleSearch();
        }
    }

    updateScreenSize = () => {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateScreenSize();
        window.addEventListener('resize', this.updateScreenSize);   
    }

    componentWillMount() {
        this.fetchNavItems(this.props);
    }

    componentWillReceiveProps(props) {
        this.fetchNavItems(props);
    }

    fetchNavItems = props => {
        if (props.prismicCtx) {
            props.prismicCtx.api.getByUID(
                "navbar",
                "navbar",
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
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    }

    setNavExpanded(toExpand) {
        this.setState({ expanded: toExpand });
    }

    closeNav() {
        this.setState({ expanded: false });
    }

    render() {
        let cartCount = 0
        let items = [];
        items = this.props.addedItems
        if (items) {
            items.map(item => {
                cartCount += item.quantity;
            });
        }
        if (this.state.width > 992) {
            // desktop
            return (
                <BG>
                    <Navbar style={navBG} expand="lg">
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <BTBLogo />
                            </Navbar.Brand>
                        </Link>
                        <Nav className="mr-auto" style={{'flex-wrap': 'wrap'}}>
                            {this.state.doc ? this.state.doc.data.navbar_items.map((item, index) => {
                                return <BTBNavLink to={"/" + RichText.asText(item.navbar_link_route)}>{RichText.asText(item.navbar_link_text)}</BTBNavLink>
                            }) : ''}
                        </Nav>
                        <SearchDiv inline>
                            {
                                this.state.search &&
                                <SearchInput id="search-input" type="text" onChange={(e) => this.setState({ searchInput: e.target.value })} placeholder="Search" />
                            }
                            {
                                this.state.searchInput !== "" &&
                                <RouteLink onClick={this.toggleSearch} to={`/shop/search/${this.state.searchInput}`}>
                                    <SearchButton>
                                        <Search />
                                    </SearchButton>
                                </RouteLink>
                            }
                            {
                                this.state.searchInput === "" &&
                                <SearchButton onClick={this.toggleSearch}>
                                    <Search />
                                </SearchButton>
                            }
                        </SearchDiv>
                        <NavItem to={`/cart`}>
                            <Cart />
                            {
                                cartCount > 0 &&
                                <CartDiv>
                                    <CartCountDiv><CartCount>{cartCount}</CartCount></CartCountDiv>
                                </CartDiv>
                            }
                        </NavItem>
                    </Navbar>
                </BG>
            )
        } else {
            // mobile
            return (
                <Navbar onToggle={this.setNavExpanded} expanded={this.state.expanded} style={navBG} expand="lg">
                    <NavbarToggler aria-controls="basic-navbar-nav">
                        <img src={navHamburgericon} alt=""/>
                    </NavbarToggler>
                    <Link onClick={this.closeNav} to={`/`}>
                        <Navbar.Brand>
                            <BTBLogo />
                        </Navbar.Brand>
                    </Link>
                    <Nav onClick={this.closeNav}>
                        <NavItem to={`/cart`}>
                            <Cart />
                            {
                                cartCount > 0 &&
                                <CartDiv>
                                    <CartCountDiv><CartCount>{cartCount}</CartCount></CartCountDiv>
                                </CartDiv>
                            }
                        </NavItem>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <SearchDiv inline>
                                <SearchInput type="text" placeholder="Search" />
                                <SearchButton>
                                    <Search />
                                </SearchButton>
                            </SearchDiv>
                            {this.state.doc ? this.state.doc.data.navbar_items.map((item, index) => {
                                return (
                                    <NavLink onClick={this.closeNav} to={"/" + RichText.asText(item.navbar_link_route)} style={navItem}>
                                        <NavText>
                                            {RichText.asText(item.navbar_link_text)}
                                        </NavText>
                                    </NavLink>)
                            }) : ''}
                            <MobileHR />
                            <SearchDiv inline>
                                <SearchInput id="search-input" type="text" placeholder="Search Products" onChange={(e) => this.setState({ searchInput: e.target.value })} />
                                {
                                    this.state.searchInput !== "" &&
                                    <RouteLink onClick={this.toggleSearch} to={`/shop/search/${this.state.searchInput}`}>
                                        <SearchButton >
                                            <Search />
                                        </SearchButton>
                                    </RouteLink>


                                }
                                {
                                    this.state.searchInput === "" &&
                                    <SearchButton onClick={this.toggleSearch}>
                                        <Search />
                                    </SearchButton>
                                }
                            </SearchDiv>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >
            )
        }
    }
}

// redux
const stateToPropertyMapper = (state) => {
    if (state.addedItems) {
        return {
            addedItems: [...state.addedItems]
        }
    } else {
        return {
            addedItems: [...state]
        }
    }
}


export default connect(
    stateToPropertyMapper)
    (NavRouter);

const BG = styled(BGWhite)`
    position: fixed;
    width: 100%;
    z-index: 20;
`;

const navBG = {
    'margin-right': 'auto',
    'margin-left': 'auto',
    'max-width': '1100px',
    'padding-right': '20px',
    'padding-left': '20px',
    'backgroundColor': '#F9F9FE',
    'min-height': '75px',
};

const navItem = {
    'padding': '0 20px'
};

const NavItem = styled(NavLink)`
    padding: 0 20px;
`;

const NavText = styled(P)`
    color: #004669;
    font-weight: 800;
    font-size: 18px;
    line-height: 28px;
`;

const MobileHR = styled.hr`
    border: 1px solid #004669;
    width: 100%;
`;

const BTBNavLink = styled(NavLink)`
    font-family: "Libre Franklin", sans-serif;
    padding: 0 30px;
    color: #004669;
    font-weight: 800;
    font-size: 18px;
    line-height: 28px;
    text-decoration: none;

    &:hover, &.active {
        color: #004669;
        text-decoration: underline #E87964;
    }
`;

const BTBLogo = styled.img`
    content: url(${Logo});
    width: 200px;
    padding: 0;
`;

const IconLink = styled(Nav.Link)`
    padding: 0px 20px;
    @media ${device.laptop} {
        padding: 0px 10px;
    }
`;

const CartDiv = styled.div`
    position: absolute;
    width: auto;
`;
const Cart = styled.img`
    content: url(${CartIcon});
`;
const Search = styled.img`
    content: url(${SearchIcon});
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
`;
const CartCountDiv = styled.div`
    position: relative;
    background-color: #E87964;
    border-radius: 10px;
    color: #F9F9FE;
    top: -13px;
    left: -10px;
`;
const CartCount = styled.p`
    padding: 3px 7px;
    font-family: "Libre Franklin", sans-serif;
    font-size: 10px;
`;

const SearchDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 0px;
    @media (max-width: 992px) {
        padding: 10px 20px 5px 20px;
    }
`;

const SearchInput = styled(FormControl)`
    max-width: 150px;
    font-family: "Libre Franklin", sans-serif;
    @media (max-width: 992px) {
        max-width: 100%;
    }
`;
const SearchButton = styled.button`
    background-color: transparent;
    outline: none;
    border-style: solid;
    border-color: transparent;
    border-radius: 10px;
    @media (max-width: 992px) {
        width: auto;
    }
`;

const NavbarToggler = styled(Navbar.Toggle)`
    border: none;
    color: transparent;
    :focus {
        border: none;
        color: transparent;
    }
    :hover {
        border: none;
        color: transparent;
    }
`;
