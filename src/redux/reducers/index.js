import { combineReducers } from "redux";
import countReducer from "./countReducer";
import generalReducer from "./generalReducer";

const rootReducer = combineReducers({
  count: countReducer,
  general: generalReducer,
});

export default rootReducer;