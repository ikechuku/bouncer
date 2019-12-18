import { SET_ACTIVITY, CREATE_USER } from "../actions/types";

let initialState = {
  vendor:[],
  creating: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        vendor: action.payload
      };
    case SET_ACTIVITY:
      return {
        ...state,
        creating: action.payload
      };
    default:
      return state;
  }
}
