import data from '../../data';
import { setDropDownOptions } from './dropdown';

export const LOAD_DATA = 'LOAD_DATA';

export const loadDataToRedux = () => (dispatch) => {
	const parsedData = {};
	Object.keys(data.data).forEach((key) => {
		// data.data[key].unshift();
		parsedData[data.data[key][0].value] = data.data[key].slice(2);
	});

	dispatch({ type: LOAD_DATA, data, parsedData });
	dispatch(setDropDownOptions());
};
