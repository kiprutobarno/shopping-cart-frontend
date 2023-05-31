import {
  CART_ITEM_ADDED,
  QUANTITY_INCREASED,
  QUANTITY_DECREASED,
  STATE_RESET,
} from "./actions";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM_ADDED:
      return {
        ...state,
        products: [...state.products, action.payload],
        quantity: state.quantity + 1,
        total: (state.total += action.payload.quantity * action.payload.price),
      };

    case QUANTITY_INCREASED:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id !== action.payload._id) {
            return product;
          } else {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
        }),
        total: (state.total += action.payload.price),
      };

    case QUANTITY_DECREASED:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id !== action.payload._id) {
            return product;
          } else {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
        }),
        total: (state.total -= action.payload.price),
      };

    case STATE_RESET:
      return {
        ...state,
        products: [],
        quantity: 0,
        total: 0,
      };

    default:
      return state;
  }
};
