import { LOAD_DATA } from "../actions/data";

const initialState = {
  excelData: {},
  fileName: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        excelData: action.payload.data,
        fileName: action.payload.filename
      };
    default:
      return state;
  }
};
