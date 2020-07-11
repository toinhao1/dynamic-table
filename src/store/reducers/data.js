import { LOAD_DATA } from '../actions/data';

const initialState = {
	excelData: {},
	fileName: '',
	parsedData: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				excelData: action.data.data,
				fileName: action.data.filename,
				parsedData: action.parsedData,
			};
		default:
			return state;
	}
};
