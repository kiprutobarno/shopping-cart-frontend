import { PRODUCTS_FETCHED } from "./actions";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
