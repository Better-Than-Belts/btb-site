import React from 'react';
import styled from 'styled-components';
import { H1, MockFilterCircle, BGWhite } from '../styles.js';
import { device } from '../device.js';
import { Dropdown, Form } from 'react-bootstrap';
import PLPProduct from '../components/PLP/PLPProduct';
import "./PLP.css";
import { getAllReviews } from '../judgeme/JudgeMeUtils.js';

class PLP extends React.Component {
    state = {
        products: [],
        shop: {},
        filterOpen: false,
        reviews: [],
        reviewsLoading: true
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
        getAllReviews().then(res => {
            this.setState(() => ({ reviews: res, reviewsLoading: false }))
        });
    }

    render() {
        return (
            <BGWhite>
                <PLPView>
                    <PLPTitle>All Products</PLPTitle>
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
                                    <PLPProduct product={product} reviews={this.state.reviews ? this.state.reviews : []} reviewsLoading={this.state.reviewsLoading}/>
                                )
                            })
                        }
                    </div>
                </PLPView >
            </BGWhite>
        )
    }
}

export default PLP;

const PLPView = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 50px;
    @media ${device.tablet} {
        padding-left: 30px;
        padding-right: 30px;
    }
    
`;

const PLPTitle = styled(H1)`
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0px;
    @media ${device.tablet} {
        font-size: 50px;
        padding-bottom: 20px;
    }
`;

const FilterDropdown = styled(Dropdown.Toggle)`
    font-family: "Libre Franklin", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    border: none;
    padding: 5px;
    background-color: #F9F9FE;
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
    font-family: "Libre Franklin", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
`

const FilterOptions = styled(Form.Check)`
    text-align: left;
    margin: 10px 20px;
    font-family: "Libre Franklin", sans-serif;
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

