import { legacy_createStore as createStore } from "redux";

const PRODUCT_ADDED = "PRODUCT_ADDED";

//Action creator function
export const addProduct = (product) => {
  return {
    type: PRODUCT_ADDED,
    payload: product,
  };
};

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return {
        ...state,
        products: state.products.push(action.payload),
        quantity: (state.quantity += action.payload.quantity),
        total: (state.total += action.payload.price * action.payload.quantity),
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
