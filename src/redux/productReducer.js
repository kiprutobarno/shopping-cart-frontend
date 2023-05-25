import { PRODUCT_FETCHED } from "./actions";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
