import data from "../../data";
import { setDropDownOptions } from "./dropdown";

export const LOAD_DATA = "LOAD_DATA";

export const loadDataToRedux = () => dispatch => {
  const parsedData = {};
  Object.keys(data.data).forEach(key => {
    data.data[key].unshift();
    parsedData[data.data[key][0].value] = { columnIndex: "" };
    return;
  });
  dispatch({ type: LOAD_DATA, payload: data });
  dispatch(setDropDownOptions());
};
