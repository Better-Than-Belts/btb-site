import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from './ActionTypes';

export const addItem = (id) => {
    return {
        type: ADD_ITEM,
        id: id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id: id
    }
}

export const addQuantity = (id, quantity) => {
    return {
        type: ADD_QUANTITY,
        id: id,
        quantity: quantity
    }
}

export const subtractQuantity = (id, quantity) => {
    return {
        type: SUB_QUANTITY,
        id: id,
        quantity: quantity
    }
}