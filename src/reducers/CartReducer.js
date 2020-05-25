import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/ActionTypes';
import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    domain: 'better-than-belts.myshopify.com'
});

const itemsState = {
    items: []
}

client.product.fetchAll().then((res) => {
    itemsState.items = res;
    res.map((prod) => {
        if (prod.handle === "better-beanie") {
            prod.variants.map((variant) => {
                itemsState.items.push(variant);
            })
        }
    })
});

const cartReducer = (state, action) => {
    const stateObject = state;
    switch (action.type) {

        // Add item to cart
        case ADD_ITEM:
            let addedItem = itemsState.items.find(item => item.id === action.id)
            let existed = stateObject.addedItems.find(item => action.id === item.id);

            if (existed) {
                // add quantity if item is already in cart
                let newItems = [];
                let i = 0;
                for (; i < stateObject.addedItems.length; i += 1) {
                    if (stateObject.addedItems[i].id != addedItem.id) {
                        newItems.push(state.addedItems[i]);
                    } else {
                        addedItem.quantity += 1;
                        newItems.push(addedItem);
                    }
                }
                return {
                    ...stateObject,
                    addedItems: newItems
                }
            } else {
                // if item is not in cart
                addedItem.quantity = 1;
                return {
                    ...stateObject,
                    addedItems: [...stateObject.addedItems, addedItem]
                }
            }
        // Remove item completely from cart
        case REMOVE_ITEM:
            let removedItem = stateObject.addedItems.find(item => action.id === item.id)
            let restItems = stateObject.addedItems.filter(item => action.id !== item.id)

            return {
                ...stateObject,
                addedItems: restItems
            }
        // Add quantity of item
        case ADD_QUANTITY:
            let addedQuantityItem = stateObject.addedItems.find(item => item.id === action.id)
            addedQuantityItem.quantity += 1;

            return {
                ...stateObject
            }
        case SUB_QUANTITY:
            let subQuantityItem = stateObject.addedItems.find(item => item.id === action.id)

            if (subQuantityItem.quantity === 1) {
                // completely remove item
                let restItems = stateObject.addedItems.filter(item => item.id !== action.id);
                return {
                    ...stateObject,
                    addedItems: [...restItems]
                }
            } else {
                // subtract quantity of item
                subQuantityItem.quantity -= 1;
                return {
                    ...stateObject
                }
            }
        default:
            return state;
    }
}

export default cartReducer;