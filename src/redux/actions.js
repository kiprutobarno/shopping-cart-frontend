export const CART_ITEM_ADDED = "CART_ITEM_ADDED";
export const STATE_RESET = "RESET_STATE";
export const QUANTITY_INCREASED = "QUANTITY_INCREASED";
export const QUANTITY_DECREASED = "QUANTITY_DECREASED";
export const PRODUCT_FETCHED = "PRODUCT_FETCHED";
export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";

// Product Action

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

export const fetchProducts = (category) => async (dispatch) => {
  try {
    const res = await fetch(
      category !== undefined
        ? `http://localhost:8000/api/v1/products?category=${category}`
        : `http://localhost:8000/api/v1/products`,
      {
        method: "GET",
        headers: {
          mode: "no-cors",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = await res.json();

    dispatch({
      type: PRODUCTS_FETCHED,
      payload: data,
    });
  } catch (error) {}
};

export const addToCart = (product) => {
  return {
    type: CART_ITEM_ADDED,
    payload: product,
  };
};

export const increaseQuantity = (product) => {
  return {
    type: QUANTITY_INCREASED,
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: QUANTITY_DECREASED,
    payload: product,
  };
};
