import {
	SET_FIRST_DROPDOWN_STATUS,
	SET_INITIAL_DROPDOWN_OPTIONS,
	DROPDOWN_OPTION_SELECTED,
} from '../actions/dropdown';

const initialState = {
	firstColSetCorrectly: false,
	dropdownOptions: [],
	dynamicOptions: [],
	paramsObject: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_FIRST_DROPDOWN_STATUS:
			return {
				...state,
				firstColSetCorrectly: action.payload,
			};
		case SET_INITIAL_DROPDOWN_OPTIONS:
			return {
				...state,
				dropdownOptions: action.payload.availableOptions,
				dynamicOptions: action.payload.availableOptions,
				paramsObject: action.payload.paramsObject,
			};
		case DROPDOWN_OPTION_SELECTED: {
			if (action.option === '(Skip)' && action.previousOption) {
				return {
					...state,
					paramsObject: {
						...state.paramsObject,
						[action.previousOption]: { columnIndex: '' },
					},
					dynamicOptions: [action.previousOption, ...state.dynamicOptions],
				};
			} else if (action.previousOption && action.previousOption !== '(Skip)') {
				return {
					...state,
					paramsObject: {
						...state.paramsObject,
						[action.option]: { columnIndex: action.columnIndex },
						[action.previousOption]: { columnIndex: '' },
					},
					dynamicOptions: [
						action.previousOption,
						...state.dynamicOptions.filter((param) => param !== action.option),
					],
				};
			} else {
				return {
					...state,
					paramsObject: {
						...state.paramsObject,
						[action.option]: { columnIndex: action.columnIndex },
					},
					dynamicOptions: state.dynamicOptions.filter(
						(param) => param !== action.option
					),
				};
			}
		}
		// no fallthrough
		default:
			return state;
	}
};
