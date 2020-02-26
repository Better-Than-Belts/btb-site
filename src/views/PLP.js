import React from 'react';
import styled from 'styled-components';
import { H1 } from '../styles.js'
import { Dropdown, Form } from 'react-bootstrap'
import PLPProduct from '../components/PLP/PLPProduct'

class PLP extends React.Component {
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
            <PLPView>
                <PLPTitle>All Products</PLPTitle>
                <HRDivider />
                <div className="filter-sort-row row" style={row}>
                    <Dropdown className="mr-auto">
                        <FilterDropdown noCaret>Filter +</FilterDropdown>
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
                        </FilterDropdownMenu>
                    </Dropdown>
                    <Dropdown className="ml-auto" alignRight>
                        <FilterDropdown noCaret>Sort</FilterDropdown>
                        <FilterDropdownMenu>
                            <FilterDropdownItem>
                                Newest
                        </FilterDropdownItem>
                            <FilterDropdownItem>
                                Price ($-$$)
                        </FilterDropdownItem>
                            <FilterDropdownItem>
                                Top Rated
                        </FilterDropdownItem>
                        </FilterDropdownMenu>
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
    margin-left: 150px;
    margin-right: 150px;
`;

const PLPTitle = styled(H1)`
    padding-top: 30px;
    padding-bottom: 30px;
`;

const HRDivider = styled.hr`
    border: 1px solid #C4C4C4;
    height: 0px;
`
const FilterDropdown = styled(Dropdown.Toggle)`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    border: none;
    padding: 5px;
    background-color: white;
    color: black;

    &:hover {
        background-color: white;
        color: black;
    }
    &:focus {
        background-color: white;
        color: black;
    }
    &:active {
        background-color: white;
        color: black;
    }
    &:show {
        background-color: white;
        color: black;
    }
`

const FilterDropdownMenu = styled(Dropdown.Menu)`
    background: #FFFFFF;
`

const FilterDropdownItem = styled(Dropdown.Item)`
    background: #FFFFFF;
`

const FilterOptions = styled(Form.Check)`
    text-align: left;
    margin: 10px 20px;
`

const row = {
    'padding': '10px 0 20px 0'
};

