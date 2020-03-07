import React from 'react';
import styled from 'styled-components';
import { H1, MockFilterCircle } from '../styles.js';
import { device } from '../device.js';
import { Dropdown, Form } from 'react-bootstrap';
import PLPProduct from '../components/PLP/PLPProduct';
import "./PLP.css";

class PLP extends React.Component {
    state = {
        products: [],
        shop: {},
        filterOpen: false,
    };

    filterOnClick = () => {
        this.setState({
            filterOpen: !this.state.filterOpen
        })
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
            <PLPView>
                <PLPTitle>All Products</PLPTitle>
                <HRDivider />
                <div className="filter-sort-row row" style={row}>
                    <Dropdown className="mr-auto">
                        <FilterDropdown id="filter-button">Filter</FilterDropdown>
                        <FilterDropdownMenu>
                            <FilterOptions
                                type="checkbox"
                                label="Striped Suspenders"
                                name="formCheckbox">
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label>Striped Suspenders</Form.Check.Label>
                            </FilterOptions>
                            <FilterOptions
                                type="checkbox"
                                label="Patterned Suspenders"
                                name="formCheckbox" />
                            <FilterOptions
                                type="checkbox"
                                label="Beanies"
                                name="formCheckbox" />
                            <Dropdown.Divider />
                            {/* TODO: clickable circles */}
                            <FilterColor>
                                <FilterColorOption />
                                <FilterColorOption />
                                <FilterColorOption />
                                <FilterColorOption />
                                <FilterColorOption />
                                <FilterColorOption />
                            </FilterColor>
                        </FilterDropdownMenu>
                    </Dropdown>
                    <Dropdown className="ml-auto" alignRight>
                        <FilterDropdown id="sort-button">Sort</FilterDropdown>
                        <SortDropdownMenu>
                            <FilterDropdownItem>
                                Newest
                            </FilterDropdownItem>
                            <FilterDropdownItem>
                                Price ($-$$)
                            </FilterDropdownItem>
                            <FilterDropdownItem>
                                Top Rated
                            </FilterDropdownItem>
                        </SortDropdownMenu>
                    </Dropdown>
                </div>
                <div className="row">
                    {
                        this.state.products.map((product, index) => {
                            return (
                                <PLPProduct product={product} />
                            )
                        })
                    }
                </div>
            </PLPView >
        )
    }
}

export default PLP;

const PLPView = styled.div`
    @media ${device.laptop} {
        margin-left: 150px;
        margin-right: 150px;
    }
    @media ${device.tablet} {
        margin-left: 60px;
        margin-right: 60px;
    }
    @media ${device.mobile} {
        margin-left: 30px;
        margin-right: 30px;
    }
    
`;

const PLPTitle = styled(H1)`
    padding-top: 30px;
    padding-bottom: 30px;
    @media ${device.tablet} {
        font-size: 50px;
        padding-bottom: 20px;
    }
`;

const HRDivider = styled.hr`
    border: 1px solid #C4C4C4;
    height: 0px;
`
const FilterDropdown = styled(Dropdown.Toggle)`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    border: none;
    padding: 5px;
    background-color: white;
    color: black;
`

const FilterDropdownMenu = styled(Dropdown.Menu)`
    background: #FFFFFF;
    width: 240px;
`

const SortDropdownMenu = styled(Dropdown.Menu)`
    background: #FFFFFF;
    width: 100%;
`

const FilterDropdownItem = styled(Dropdown.Item)`
    color: black;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
`

const FilterOptions = styled(Form.Check)`
    text-align: left;
    margin: 10px 20px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
`

const FilterColorOption = styled(MockFilterCircle)`
    margin: 5px;
`

const FilterColor = styled.div`
    margin: 10px;
`

const row = {
    'padding': '10px 0 20px 0'
};

