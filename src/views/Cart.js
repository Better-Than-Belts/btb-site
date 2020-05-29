import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { Link } from 'react-router-dom';
import { P, RouteLink, BGWhite, BGBlue, Section, Wave, H1, TextCenter, H2, P2, P3, TextArea, ButtonYellow, ButtonText, A } from '../styles';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../actions/CartActions';
import RemoveIcon from '../images/RemoveFromCart.svg';
import Plus from '../images/QuantityPlus.svg';
import Minus from '../images/QuantityMinus.svg';
import { RichText } from 'prismic-reactjs';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            checkout: { lineItems: [] },
            doc: null,
            err: null
        }
        this.goCheckout = this.goCheckout.bind(this);
    }

    componentWillMount() {
        this.props.client.checkout.create().then((res) => {
            this.setState({
                checkout: res,
            });
        });
        this.fetchPrismic(this.props);
    }

    componentWillReceiveProps(props) {
        this.fetchPrismic(props);
    }

    fetchPrismic = props => {
        if (props.prismicCtx && props.id) {
            props.prismicCtx.api
                .getByUID('cart', 'cart')
                .then((doc, err) => {
                    if (doc) {
                        this.setState(() => ({ doc }));
                    } else if (err) {
                        this.setState(() => ({ err }));
                    }
                });
        }
    }

    goCheckout = () => {
        if (this.state.checkout && this.state.checkout.id) {
            const checkoutId = this.state.checkout.id;
            let checkoutVar = this.state.checkout;
            let lineItemsToAdd = [];
            this.props.addedItems.map(item => {
                let variantId = item.variants ? item.variants[0].id : item.id;
                let lineItem = { variantId, quantity: item.quantity }
                lineItemsToAdd.push(lineItem);
            });
            this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((res) => {
                checkoutVar = res;
            });
            return checkoutVar.webUrl;
        }
        return "";
    }

    remove = (id) => {
        this.props.removeItem(id);
    }

    add = (id) => {
        this.props.addQuantity(id);
    }

    subtract = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {
        let totalPrice = 0;
        let addedItems = this.props.addedItems.length ?
            (
                this.props.addedItems.map(item => {
                    if (item.handle) {
                        totalPrice += item.variants[0].price * item.quantity
                    } else {
                        totalPrice += item.price * item.quantity
                    }
                    return (
                        <div>
                            <CartItem {...this.props} item={item} remove={this.remove} add={this.add} subtract={this.subtract} />
                            <HeaderLine />
                        </div>

                    )
                })
            ) :
            (
                <p></p>
            )
        let cartTitle = this.state.doc ?
            RichText.asText(this.state.doc.data.title) :
            "Your Cart";

        return (this.props.addedItems.length ? 
            <BGWhite>
                <SectionContainer>
                    <PageTitle>
                        <TextCenter>
                            <H2>{cartTitle}</H2>
                        </TextCenter>
                    </PageTitle>
                    <CartContainer>
                        <CartItems>
                            <HeaderLine />
                            {addedItems}
                        </CartItems>
                        <CartInfo>
                            <LineDesktopOnly />
                            <ItemTitle>
                                <ItemTitleText>Subtotal</ItemTitleText>
                                <AlignRight><ItemTotalText>${totalPrice.toFixed(2)}</ItemTotalText></AlignRight>
                            </ItemTitle>
                            <LineDesktopOnly />
                            <TaxesShipping>
                                Taxes and shipping calculated at checkout.
                            </TaxesShipping>
                            <OrderNote>
                                Add a note to your order
                            </OrderNote>
                            <TextArea rows="8" />
                            <A href={this.goCheckout()}>
                                <CheckoutButton>
                                    <ButtonText>Checkout</ButtonText>
                                </CheckoutButton>
                            </A>
                            <ContinueShopping to={`/shop`}>Continue Shopping</ContinueShopping>
                        </CartInfo>
                    </CartContainer>
                </SectionContainer>
            </BGWhite > : <EmptyCart />
        )
    }
};

const EmptyCart = () => {
    return (
            <div>
                <BGBlue>
                    <Section>
                        <TextCenter>
                            <EmptyH1>
                                Your Cart
                            </EmptyH1>
                            <EmptyP>Your cart is currently empty</EmptyP>
                        </TextCenter>
                    </Section>
                    <Wave />
                </BGBlue>
                <BGWhite>
                    <ContinueShoppingSection>
                        <TextCenter>
                            <Link to="/shop">
                                <ButtonYellow>
                                    <ButtonText>
                                        Continue Shopping
                                    </ButtonText>
                                </ButtonYellow>
                            </Link>
                        </TextCenter>
                    </ContinueShoppingSection>
                </BGWhite>
            </div>
    );
}

//Empty styles
const EmptyH1 = styled(H1)`
    margin-bottom: 60px;
`;

const EmptyP = styled(P)`
    max-width: 300px;
    margin: auto;
`;

const ContinueShoppingSection = styled(Section)`
    padding: 50px 20px;
`;

// styles

const SectionContainer = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 100px;
    @media ${device.tablet} {
        padding-bottom: 30px;
    }
`;

const PageTitle = styled.div`
    padding: 80px 40px 40px 40px;
    @media ${device.tablet} {
        padding: 30px;
    }
    @media ${device.mobile} {
        padding: 30px;
    }
`;

const CartContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;

    @media ${device.tablet} {
        flex-wrap: wrap;
    }
`;

const CartItems = styled.div`
    width: 50%;
    padding: 0px 30px;
    @media ${device.tablet} {
        order: 1;
        width: 100%;
    }
`;

const CartInfo = styled.div`
    width: 50%;
    padding: 0px 30px;
    @media ${device.tablet} {
        width: 100%;
        order: 2;
    }
`;

const TaxesShipping = styled(P3)`
    color: #004669;
    padding-top: 10px;
`;

const OrderNote = styled(P3)`
    padding-top: 50px;
    padding-bottom: 10px;
`;

const CheckoutButton = styled(ButtonYellow)`
    margin-top: 40px;
`

const ContinueShopping = styled(RouteLink)`
    font-family: "Libre Franklin", sans-serif;
    text-decoration: underline;
    padding: 0px 20px;
    @media (max-width: 450px) {
        display: block;
        padding: 20px;
    }
`;

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

const dispatchToPropertyMapper = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id))
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id))
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id))
        }
    }
}


export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
    (Cart)


/* Cart Item */

const CartItem = (props) => {
    let item = props.item;
    let remove = props.remove;
    let add = props.add;
    let subtract = props.subtract;
    let imgSrc = item.images ? item.images[0].src : item.image.src;
    let price = item.variants ? item.variants[0].price : item.price;
    let title = item.handle ? item.title : "Better Beanie - " + item.title;
    return (
        <Item key={item.id}>
            <ImageDiv>
                <ItemImage width="300px" src={imgSrc} />
            </ImageDiv>
            <ItemInfo>
                <ItemTitle>
                    <ItemTitleText>{title}</ItemTitleText>
                    <AlignRight>
                        <ItemRemove onClick={() => { remove(item.id) }} />
                    </AlignRight>
                </ItemTitle>
                <ItemDiv class="row">
                    <div style={NoPaddingDiv} class="col-1">
                        <ItemTotalText>QTY</ItemTotalText>
                    </div>
                    <ItemDiv class="col-8">
                        <QuantityButton onClick={() => {
                            subtract(item.id)
                        }}>
                            <ButtonImage src={Minus} />
                        </QuantityButton>
                        <ItemTotalText>{item.quantity}</ItemTotalText>
                        <QuantityButton onClick={() => {
                            add(item.id)
                        }}>
                            <ButtonImage src={Plus} />
                        </QuantityButton>
                    </ItemDiv>
                    <AlignRight class="col-2">
                        <ItemTotalText>${price}</ItemTotalText>
                    </AlignRight>
                </ItemDiv>
            </ItemInfo>
        </Item>
    )
}

// Styles
const HeaderLine = styled.hr`
    border: 1px solid #004669;
`;

const LineDesktopOnly = styled.hr`
    border: 1px solid #004669;
    @media ${device.tablet} {
        display: none;
    }
`;

const Item = styled.div`
    display: flex;
    flex: nowrap;
`;

const ImageDiv = styled.div`
    padding: 10px 20px 10px 0px;
`;

const ItemImage = styled.img`
    width: 100px;
`;

const ItemInfo = styled.div`
    width: 100%;
`;

const ItemTitle = styled.div`
    display: flex;
    flex: nowrap;
    width: 100%;
`;

const ItemTitleText = styled(P2)`
    color: #004669;
    width: 100%;
`

const AlignRight = styled.div`
    text-align: right;
    vertical-align: middle;
    display: table-cell;
`;

const ItemRemove = styled.img`
    content: url(${RemoveIcon});
    float: right;
    display: block;
    padding-top: 7px;
    width: 40px;
    &:hover {
        cursor: pointer;
    }
`;

const ItemDiv = styled.div`
    display: flex;
    flex: nowrap;
    width: 100%;
    height: 75%;
    align-items: flex-end;
`;

const NoPaddingDiv = {
    'padding': '0px'
}

const ItemTotalText = styled(P3)`
    color: #004669;
`;

const QuantityButton = styled.button`
    background-color: transparent;
    border-style: none;
    padding: 0px 15px 0px 15px;
`;

const ButtonImage = styled.img`
    padding: 5px 5px 12px 5px;
`;
