import { combineReducers } from "redux";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;