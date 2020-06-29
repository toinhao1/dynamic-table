import { combineReducers } from "redux";
import componentReducer from "./components";
import dropdownReducer from "./dropdown";
import dataReducer from "./data";

export const rootReducer = combineReducers({
  components: componentReducer,
  dropdown: dropdownReducer,
  data: dataReducer
});
