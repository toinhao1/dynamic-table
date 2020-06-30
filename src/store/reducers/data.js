import { LOAD_DATA } from '../actions/data';

const initialState = {
	excelData: {},
	fileName: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				excelData: action.data.data,
				fileName: action.data.filname,
				parsedDate: action.parsedData,
			};
		default:
			return state;
	}
};
