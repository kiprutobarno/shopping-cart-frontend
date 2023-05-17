const CART_ITEM_ADDED = "CART_ITEM_ADDED";

const initialState = {
  product: [],
  quantity: 0,
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM_ADDED:
      return {
        ...state,
        product: [...state.product, action.payload],
        quantity: state.quantity + 1,
        total: (state.total += action.payload.quantity * action.payload.price),
      };

    default:
      return state;
  }
};

export const addCartItem = (product) => (dispatch) => {
  try {
    dispatch({
      type: CART_ITEM_ADDED,
      payload: product,
    });
  } catch (error) {}
};
