export const SET_FIRST_DROPDOWN_STATUS = 'SET_FIRST_DROPDOWN_STATUS';
export const SET_INITIAL_DROPDOWN_OPTIONS = 'SET_INITIAL_DROPDOWN_OPTIONS';
export const DROPDOWN_OPTION_SELECTED = 'DROPDOWN_OPTION_SELECTED';

export const setFirstColStatus = (isCorrect) => {
	return {
		type: SET_FIRST_DROPDOWN_STATUS,
		payload: isCorrect,
	};
};

export const setDropDownOptions = () => (dispatch, getState) => {
	const initialOptions = getState().data.excelData;
	console.log(initialOptions);
	let paramsObject = {};
	const availableOptions = Object.keys(initialOptions).map((key) => {
		paramsObject[initialOptions[key][0].value] = { columnIndex: '' };
		return initialOptions[key][0].value;
	});
	dispatch({
		type: SET_INITIAL_DROPDOWN_OPTIONS,
		payload: { availableOptions, paramsObject },
	});
};

export const dropDownOptionSelected = (columnIndex, option, previousOption) => (
	dispatch
) => {
	console.log(columnIndex, option, previousOption);
	dispatch({
		type: DROPDOWN_OPTION_SELECTED,
		columnIndex,
		option,
		previousOption,
	});
};
