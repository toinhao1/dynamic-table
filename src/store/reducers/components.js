import { OPEN_TABLE_MODAL, CLOSE_TABLE_MODAL } from "../actions/components";

const initialState = {
  tableModalIsOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TABLE_MODAL:
      return {
        ...state,
        tableModalIsOpen: true
      };
    case CLOSE_TABLE_MODAL:
      return {
        ...state,
        tableModalIsOpen: false
      };
    default:
      return state;
  }
};
