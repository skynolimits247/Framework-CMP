import { FETCH_CART, ADD_CART_COUNT, REDUCE_CART_COUNT, ADD_CART_ITEM } from '../../shared/actions/types';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART:
            return {
                ...state,
                cart: action.payload
            };
        case ADD_CART_COUNT:
            return {
                ...state,
                cart: [...action.payload]
            };
        case REDUCE_CART_COUNT:
            return {
                ...state,
                cart: [...action.payload]
            };
        case ADD_CART_ITEM:
            return {
                ...state,
                cart: [...action.payload]
            };
        default:
            return state;
    }
};
export default cartReducer;
