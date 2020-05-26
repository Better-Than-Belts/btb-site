import React from 'react';
import styled from 'styled-components';
import { H1, MockFilterCircle, BGWhite, P, Image, RouteLink, H3, TextCenter, Section } from '../styles.js';
import { device } from '../device.js';
import { Dropdown, Form } from 'react-bootstrap';
import PLPProduct from '../components/PLP/PLPProduct';
import BlackWhiteCircle from '../images/BlackWhiteFilter.svg';
import "./PLP.css";

class PLP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsMaster: props.products,
            products: new Set(props.products),
            filterOpen: false,
            collections: [],
            striped: false,
            patterned: false,
            beanies: false,
            allProducts: true,
            selectedColors: [], // ['red', 'green', 'blue, 'gray']
            searchQuery: "",
            search: false,
            currentSort: "Top Rated"
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.products.length === 0 && this.props.products !== prevProps.products) {
            this.setState({
                collections: this.props.collections,
                productsMaster: this.props.products,
                products: this.props.products
            })
        }
    }

    componentDidMount() {
        this.getAllProducts();
    }

    getAllProducts = () => {
        this.setState({
            collections: this.props.collections,
            products: new Set(this.props.products),
            productsMaster: this.props.products,
            allProducts: true,
            search: false
        })
        if (this.props.query && this.props.query !== "") {
            const searchQuery = {
                query: `title: ${this.props.query}`
            };
            this.props.client.product.fetchQuery(searchQuery).then((products) => {
                this.setState({
                    search: true,
                    searchQuery: this.props.query,
                    products: new Set(products),
                    allProducts: false
                })
            })
        }
    }

    filterOnChange = () => {
        this.setState({
            products: new Set()
        });
        if (this.state.patterned) {
            this.getPatternedSuspenders();
        }
        if (this.state.striped) {
            this.getStripedSuspenders();
        }
        if (this.state.beanies) {
            this.getBeanies();
        }
        if (!this.state.patterned && !this.state.striped && !this.state.beanies) {
            this.setState({
                allProducts: true,
                products: new Set(this.state.productsMaster)
            });
        }
    }

    patternedOnChange = () => {
        if (!this.state.patterned) {
            this.state.patterned = true;
        } else {
            this.state.patterned = false;
        }
        this.filterOnChange();
    }

    getPatternedSuspenders = () => {
        const query = this.props.client.graphQLClient.query((root) => {
            root.addConnection('products', {
                args: { first: 250, query: "tag:{{patterned suspender}}" }
            }, (product) => {
                product.add('id');
            });
        });
        let patternedIds = [];

        this.props.client.graphQLClient.send(query).then(({ model, data }) => {
            model.products.map((item) => {
                patternedIds.push(item.id);
            })
            let filterItems = this.state.productsMaster.filter(item => (patternedIds.includes(item.id)));
            if (this.state.allProducts) {
                this.setState({
                    products: new Set(filterItems),
                    allProducts: false
                })
            } else {
                let filterSet = new Set(filterItems);
                this.setState({
                    products: new Set([...this.state.products, ...filterSet]),
                })
            }
        });
    }

    stripedOnChange = () => {
        if (!this.state.striped) {
            this.state.striped = true;
        } else {
            this.state.striped = false;
        }
        this.filterOnChange();
    }

    getStripedSuspenders = () => {
        const query = this.props.client.graphQLClient.query((root) => {
            root.addConnection('products', {
                args: { first: 250, query: "tag:{{striped suspender}}" }
            }, (product) => {
                product.add('id');
            });
        });
        let stripedIds = [];

        this.props.client.graphQLClient.send(query).then(({ model, data }) => {
            model.products.map((item) => {
                stripedIds.push(item.id);
            })
            let filterItems = this.state.productsMaster.filter(item => (stripedIds.includes(item.id)));
            if (this.state.allProducts) {
                this.setState({
                    products: new Set(filterItems),
                    allProducts: false
                })
            } else {
                let filterSet = new Set(filterItems);
                this.setState({
                    products: new Set([...this.state.products, ...filterSet]),
                })
            }
        });
    }

    beaniesOnChange = () => {
        if (!this.state.beanies) {
            this.state.beanies = true;
        } else {
            this.state.beanies = false;
        }
        this.filterOnChange();
    }

    getBeanies = () => {
        const query = this.props.client.graphQLClient.query((root) => {
            root.addConnection('products', {
                args: { first: 250, query: "tag:{{beanie}}" }
            }, (product) => {
                product.add('id');
            });
        });
        let beanieIds = [];

        this.props.client.graphQLClient.send(query).then(({ model, data }) => {
            model.products.map((item) => {
                beanieIds.push(item.id);
            })
            let filterItems = this.state.productsMaster.filter(item => (beanieIds.includes(item.id)));
            if (this.state.allProducts) {
                this.setState({
                    products: new Set(filterItems),
                    allProducts: false
                })
            } else {
                let filterSet = new Set(filterItems);
                this.setState({
                    products: new Set([...this.state.products, ...filterSet]),
                })
            }
        });
    }

    sortPrice = () => {
        this.setState({
            products: new Set(this.state.productsMaster.sort(function (a, b) { return a.variants[0].price - b.variants[0].price })),
            currentSort: "Price ($-$$)"
        });
    }

    sortNewest = () => {
        let items = this.state.collections.find(col => col.title === "Newest");
        this.props.client.collection.fetchWithProducts(items.id, { productsFirst: 250 }).then((collection) => {
            this.setState({
                products: new Set(collection.products),
                allProducts: true,
                currentSort: "Newest"
            })
        })
    }

    sortTopRated = () => {
        let items = this.state.collections.find(col => col.title === "All Products");
        this.props.client.collection.fetchWithProducts(items.id, { productsFirst: 250 }).then((collection) => {
            this.setState({
                products: new Set(collection.products),
                productsMaster: collection.products,
                allProducts: true,
                currentSort: "Top Rated"
            })
        })
    }

    setColor(color) {
        let colors = this.state.selectedColors
        let idx = colors.indexOf(color);
        if (idx > -1) {
            colors.splice(idx, 1);
        } else {
            colors.push(color);
        }
        this.setState({
            selectedColors: colors
        })
        this.filterOnChange();
        colors.map((color, index) => {
            const query = this.props.client.graphQLClient.query((root) => {
                root.addConnection('products', {
                    args: { first: 250, query: `tag:{{${color}}}` }
                }, (product) => {
                    product.add('id');
                });
            });
            let colorIds = [];
            this.props.client.graphQLClient.send(query).then(({ model, data }) => {
                model.products.map((item) => {
                    colorIds.push(item.id);
                })
                let filterItems = this.state.productsMaster.filter(item => (colorIds.includes(item.id)));
                if (this.state.allProducts) {
                    this.setState({
                        products: new Set(filterItems),
                        allProducts: false
                    })
                } else {
                    let filterSet = new Set(filterItems);
                    this.setState({
                        products: new Set([...this.state.products, ...filterSet]),
                    })
                }
            });
        })
    }

    removeSearch = (props) => {
        if (props.match.params.query) {
            this.props.history.push('/shop');
        }
    }

    render() {
        let prods = Array.from(this.state.products);
        if (this.props.query && this.props.query !== "" && this.props.query !== this.state.searchQuery) {
            const searchQuery = {
                query: `title: ${this.props.query}`
            };
            this.props.client.product.fetchQuery(searchQuery).then((products) => {
                this.setState({
                    search: true,
                    searchQuery: this.props.query,
                    products: new Set(products),
                    allProducts: false
                })
            })
        }
        return (
            <BGWhite>
                <PLPView>
                    <RouteLink to={`/shop`}><PLPTitle>All Products</PLPTitle></RouteLink>
                    {
                        !this.state.search ?
                            <div className="filter-sort-row row" style={row}>
                                <Dropdown className="mr-auto">
                                    <FilterDropdown id="filter-button">Filter</FilterDropdown>
                                    <FilterDropdownMenu>
                                        <CheckboxOption>
                                            <CheckInput type="checkbox" onClick={() => this.stripedOnChange()} />
                                            <Form.Check.Label><P>Striped Suspenders</P></Form.Check.Label>
                                        </CheckboxOption>
                                        {/* </FilterOptions> */}
                                        <CheckboxOption>
                                            <CheckInput type="checkbox" onClick={() => this.patternedOnChange()} />
                                            <Form.Check.Label><P>Patterned Suspenders</P></Form.Check.Label>
                                        </CheckboxOption>
                                        <CheckboxOption>
                                            <CheckInput type="checkbox" onClick={() => this.beaniesOnChange()} />
                                            <Form.Check.Label><P>Beanies</P></Form.Check.Label>
                                        </CheckboxOption>
                                        <Dropdown.Divider />
                                        <FilterColor>
                                            <VariantCircleBorder className={this.state.selectedColors.includes('gray') ? " selected" : ""} onClick={() => this.setColor("gray")}>
                                                <BlackWhiteFilter />
                                            </VariantCircleBorder>
                                            <VariantCircleBorder className={this.state.selectedColors.includes('red') ? " selected" : ""} onClick={() => this.setColor("red")}>
                                                <FilterRed />
                                            </VariantCircleBorder>
                                            <VariantCircleBorder className={this.state.selectedColors.includes('green') ? " selected" : ""} onClick={() => this.setColor("green")}>
                                                <FilterGreen />
                                            </VariantCircleBorder>
                                            <VariantCircleBorder className={this.state.selectedColors.includes('blue') ? " selected" : ""} onClick={() => this.setColor("blue")}>
                                                <FilterBlue />
                                            </VariantCircleBorder>
                                        </FilterColor>
                                    </FilterDropdownMenu>
                                </Dropdown>
                                <Dropdown className="ml-auto" alignRight>
                                    <FilterDropdown id="sort-button">{this.state.currentSort}</FilterDropdown>
                                    <SortDropdownMenu>
                                        <FilterDropdownItem onClick={() => this.sortTopRated()}>
                                            Top Rated
                            </FilterDropdownItem>
                                        <FilterDropdownItem onClick={() => this.sortPrice()}>
                                            Price ($-$$)
                            </FilterDropdownItem>
                                        <FilterDropdownItem onClick={() => this.sortNewest()}>
                                            Newest
                            </FilterDropdownItem>
                                    </SortDropdownMenu>
                                </Dropdown>
                            </div> :
                            <BackToAllDiv>
                                <BackToAll to={`/shop`}>
                                    Back to all products
                            </BackToAll>
                            </BackToAllDiv>
                    }
                    <div className="row">
                        {
                            prods.length <= 0 && !this.state.search &&
                            <Section><TextCenter><P>Pulling up your pants... :)</P></TextCenter></Section>
                        }
                        {
                            prods.length > 0 &&
                            prods.map((product, index) => {
                                return (
                                    <PLPProduct product={product} />
                                )
                            })
                        }
                    </div>
                </PLPView >
            </BGWhite >
        )
    }
}

export default PLP;

const BackToAll = styled(RouteLink)`
    font-family: "Libre Franklin", sans-serif;
    text-decoration: underline;
    padding: 0px;
    font-size: 24px;
`;
const BackToAllDiv = styled.div`
    padding: 30px;
`;

const CheckboxOption = styled.div`
    position: relative;
`;
const CheckInput = styled(Form.Check.Input)`
    position: relative;
    margin: 10px 10px 10px 20px;
`;

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
    padding-top: 100px;
    padding-bottom: 0px;
    margin: 0px;
    @media ${device.tablet} {
        padding-top: 30px;
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
    width: 300px;
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
    width: 20px;
`

const FilterColorOption = styled.span`
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 40px;
    overflow: hidden;
    display: inline-block;
`;

const FilterRed = styled(FilterColorOption)`
    background-color: #CE4230;
`
const FilterGreen = styled(FilterColorOption)`
    background-color: #45AF51;
`
const FilterBlue = styled(FilterColorOption)`
    background-color: #0B79A9;
`

const BlackWhiteFilter = styled(Image)`
    width: 30px;
    height: 30px;
    content: url(${BlackWhiteCircle});
    margin: 5px;
    @media ${device.tablet} {
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }
`

const FilterColor = styled.div`
    margin: 10px;
`

const VariantCircleBorder = styled.div`
    margin: 3px;
    padding: 2px 2px 0px 2px;
    border-radius: 50%;
    border: solid rgba(0, 0, 0, 0) 1px;
    display: inline-block;

    &:hover {
        cursor: pointer;
        border: solid gray 1px;
    }

    &.selected {
        border: solid black 1px;
    }
`;

const row = {
    'padding': '10px 0 20px 0'
};

