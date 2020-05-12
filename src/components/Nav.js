import React from 'react';
import { BGWhite, P } from '../styles';
import Logo from '../images/logo.svg';
import CartIcon from '../images/CartIcon.svg';
import SearchIcon from '../images/SearchIcon.svg';
import AccountIcon from '../images/AccountIcon.svg';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { device } from '../device';
import navHamburgericon from '../images/NavHamburgerIcon.svg';
import PrismicPage from '../prismic/PrismicPage';

class NavRouter extends React.Component {
    static pageType = 'navbar';

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            expanded: false
        };
        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    updateScreenSize = () => {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateScreenSize();
        window.addEventListener('resize', this.updateScreenSize);
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
        if (this.state.width > 992) {
            // desktop
            return (
                <BGWhite>
                    <Navbar style={navBG} expand="lg">
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <BTBLogo />
                            </Navbar.Brand>
                        </Link>
                        <Nav className="mr-auto">
                            <BTBNavLink to={`/shop`}>
                                Shop
                                </BTBNavLink>
                            <BTBNavLink to={`/why-suspenders`}>
                                Why Suspenders
                                </BTBNavLink>
                            <BTBNavLink to={`/our-story`}>
                                Our Story
                                </BTBNavLink>
                            <BTBNavLink to={`/faq`}>
                                FAQ
                                </BTBNavLink>
                        </Nav>
                        <IconLink><Search /></IconLink>
                        <IconLink><Account /></IconLink>
                        <NavItem to={`/cart`}><Cart /></NavItem>
                    </Navbar>
                </BGWhite>
            )
        } else {
            // mobile
            return (
                <Navbar onToggle={this.setNavExpanded} expanded={this.state.expanded} style={navBG} expand="lg">
                    <NavbarToggler aria-controls="basic-navbar-nav">
                        <img src={navHamburgericon} />
                    </NavbarToggler>
                    <Link onClick={this.closeNav} to={`/`}>
                        <Navbar.Brand>
                            <BTBLogo />
                        </Navbar.Brand>
                    </Link>
                    <Nav onClick={this.closeNav}>
                        <Nav.Link><Cart /></Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <SearchDiv inline>
                                <SearchInput type="text" placeholder="Search" />
                                <SearchButton>
                                    <Search />
                                </SearchButton>
                            </SearchDiv>
                            <NavLink onClick={this.closeNav} to={`/shop`} style={navItem}>
                                <NavText>Shop</NavText>
                            </NavLink>
                            <NavLink onClick={this.closeNav} to={`/why-suspenders`} style={navItem}>
                                <NavText>Why Suspenders</NavText>
                            </NavLink>
                            <NavLink onClick={this.closeNav} to={`/our-story`} style={navItem}>
                                <NavText>Our Story</NavText>
                            </NavLink>
                            <NavLink onClick={this.closeNav} to={`/faq`} style={navItem}>
                                <NavText>FAQ</NavText>
                            </NavLink>
                            <MobileHR />
                            <Nav.Link onClick={this.closeNav} style={navItem}>
                                <NavText>Account</NavText>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}

export default PrismicPage(NavRouter);

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
`;

const IconLink = styled(Nav.Link)`
    padding: 0px 20px;
    @media ${device.laptop} {
        padding: 0px 10px;
    }
`;

const Cart = styled.img`
    content: url(${CartIcon});
`;
const Account = styled.img`
    content: url(${AccountIcon});
`;
const Search = styled.img`
    content: url(${SearchIcon});
    padding: 5px 0px;
`;

const SearchDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 10px 20px 5px 20px;
`;

const SearchInput = styled(FormControl)`
    width: 80%;
    font-family: "Libre Franklin", sans-serif;
`;
const SearchButton = styled.button`
    width: 20%;
    background-color: transparent;
    border-radius: 10px;
    outline: none;
    border-style: solid;
    border-color: #004669;
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
