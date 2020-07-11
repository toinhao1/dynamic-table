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

	return (
		<>
			{columnsToDisplay &&
				[...columnsToDisplay, 0].map((each, index) => {
					return (
						<td>
							<FormControl
								onChange={(e) => handleChangeCellValue(index, e)}
								value={
									(firstColSetCorrectly &&
										(cellValues[index] || renderCorrectData(index))) ||
									''
								}
							/>
						</td>
					);
				})}
		</>
	);
};

export default TableCells;
