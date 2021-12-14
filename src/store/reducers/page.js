import { FETCH_PAGE } from "../types";

const inititalState = {};

const page = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default page;
