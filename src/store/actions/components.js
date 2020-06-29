import { setFirstColStatus } from "./dropdown";
import { loadDataToRedux } from "./data";

export const OPEN_TABLE_MODAL = "OPEN_TABLE_MODAL";
export const CLOSE_TABLE_MODAL = "CLOSE_TABLE_MODAL";

export const openTableModal = () => dispatch => {
  dispatch(loadDataToRedux());
  dispatch({ type: OPEN_TABLE_MODAL });
};

export const closeTableModal = () => dispatch => {
  dispatch({ type: CLOSE_TABLE_MODAL });
  dispatch(setFirstColStatus(false));
};
