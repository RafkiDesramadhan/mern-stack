import { CHECKOUT_BOOKING } from "../types";

const intitialState = null;

const checkout = (state = intitialState, action) => {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
};

export default checkout;
