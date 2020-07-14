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

		console.log('here fd ', typeof value);
		if (
			(paramsObject['Name'].columnIndex === cellIndex &&
				typeof value !== 'string') ||
			(paramsObject['Location'].columnIndex === cellIndex &&
				typeof value !== 'string')
		) {
			return (isInvalid = true);
		}

		if (
			(paramsObject["T'max"].columnIndex === cellIndex && isNaN(value)) ||
			(paramsObject["T'mid"].columnIndex === cellIndex && isNaN(value)) ||
			(paramsObject["T'min"].columnIndex === cellIndex && isNaN(value))
		) {
			return (isInvalid = true);
		}
		if (paramsObject['Bus Address'].columnIndex === cellIndex) {
			const busArray = [
				'BUS1',
				'BUS2',
				'BUS3',
				'BUS4',
				'BUS5',
				'BUS6',
				'BUS7',
				'BUS8',
			];
			const isABus = busArray.find((element) => element === value);
			if (!isABus) isInvalid = true;
		}

		if (paramsObject['Rotation Direction'].columnIndex === cellIndex) {
			const rotationEnum = ['cw', 'ccw'];
			const isRotation = rotationEnum.find((element) => element === value);
			if (!isRotation) isInvalid = true;
		}
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
