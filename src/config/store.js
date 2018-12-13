import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import reducers from "../reducers/index";

const middle = [reduxPromise, reduxThunk];

export default applyMiddleware(...middle)(createStore)(reducers);
