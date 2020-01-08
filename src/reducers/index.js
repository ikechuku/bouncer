import { combineReducers } from "redux";
import customerReducer from "./customer.reducer";
import vendorReducer from "./vendor.reducer";

import login from "./Login.reducer";
import emailVerifification from "./emailVerification.reducer";

export default combineReducers({
  customer: customerReducer,
  vendor: vendorReducer,
  login,
  emailVerifification
});
