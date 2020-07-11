import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl } from 'react-bootstrap';

const TableCells = ({ columnsToDisplay, rowIndex }) => {
	const { dropdown, data } = useSelector((state) => state);
	const [cellValues, setCellValue] = useState({});
	const { paramsObject, firstColSetCorrectly } = dropdown;

	const renderCorrectData = (cellIndex) => {
		for (const key in paramsObject) {
			if (paramsObject[key].columnIndex === cellIndex) {
				return data.parsedData[key][rowIndex].value;
			}
		}
	};

	const handleChangeCellValue = (cellIndex, e) => {
		setCellValue({ ...cellValues, [cellIndex]: e.currentTarget.value });
	};

	// - Name (string, required)
	// - Location (string, required)
	// - Bus Address (string enum [BUS1,BUS2,BUS3,BUS4,BUS5,BUS6,BUS7,BUS8], required)
	// - Torque Max (number, required)
	// - Torque mid (number, required)
	// - Torque min (number, required)
	// - Rotation Direction (string enum [cw,ccw], required)
	const handleValidations = (cellIndex, value) => {
		let isInvalid = false;
		if (value === '') isInvalid = true;

		// if (paramsObject['Name'].columnIndex === cellIndex && value === '') {
		// 	isInvalid = true;
		// } else if (
		// 	paramsObject['Location'].columnIndex === cellIndex &&
		// 	value === ''
		// ) {
		// 	isInvalid = true;
		// } else if (paramsObject['Bus Address'].columnIndex === cellIndex) {
		// 	const busArray = [
		// 		'BUS1',
		// 		'BUS2',
		// 		'BUS3',
		// 		'BUS4',
		// 		'BUS5',
		// 		'BUS6',
		// 		'BUS7',
		// 		'BUS8',
		// 	];
		// 	busArray.forEach((bus) => {
		// 		if (value !== bus || value === '') {
		// 			isInvalid = true;
		// 		}
		// 	});
		// }

		return isInvalid;
	};

	return (
		<>
			{columnsToDisplay &&
				[...columnsToDisplay, 0].map((each, index) => {
					return (
						<td>
							<FormControl
								onChange={(e) => handleChangeCellValue(index, e)}
								disabled={index === 0 ? true : false}
								value={
									(firstColSetCorrectly &&
										(cellValues[index] || renderCorrectData(index))) ||
									''
								}
							/>
							{handleValidations(
								index,
								cellValues[index] || renderCorrectData(index)
							) && <div>Is invalid</div>}
						</td>
					);
				})}
		</>
	);
};

export default TableCells;
