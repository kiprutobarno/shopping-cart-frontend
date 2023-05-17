const PRODUCT_FETCHED = "PRODUCT_FETCHED";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCHED:
      return action.payload;

    default:
      return state;
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
      method: "GET",
      headers: {
        mode: "no-cors",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const { data } = await res.json();
    dispatch({
      type: PRODUCT_FETCHED,
      payload: data,
    });
  } catch (error) {}
};
