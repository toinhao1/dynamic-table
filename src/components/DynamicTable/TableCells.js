import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TableCells = ({ columnsToDisplay, rowIndex }) => {
	const { dropdown, data } = useSelector((state) => state);
	const { cellData, setCellData } = useState();
	const { paramsObject, firstColSetCorrectly } = dropdown;

	const renderCorrectData = (cellIndex) => {
		for (const key in paramsObject) {
			if (paramsObject[key].columnIndex === cellIndex) {
				return data.parsedData[key][rowIndex].value;
			}
		}
		// if (paramsObject['Device Type'].columnIndex === cellIndex) {
		// 	return data.parsedData['Device Type'][rowIndex].value;
		// }
		// return Object.keys(paramsObject).forEach((key) => {
		// 	if (paramsObject[key].columnIndex === cellIndex) {
		// 		return data.parsedData[key][rowIndex].value;
		// 		// return (
		// 		// 	// <td key={data.parsedData[key][rowIndex].id}>
		// 		// 	<input value={data.parsedData[key][rowIndex].value || ''} />
		// 		// 	// </td>
		// 		// );
		// 	}
		// });
	};

	return (
		<>
			{columnsToDisplay &&
				[...columnsToDisplay, 0].map((each, index) => {
					return (
						<td>
							<input
								value={(firstColSetCorrectly && renderCorrectData(index)) || ''}
							/>
						</td>
					);
				})}
		</>
	);
};

export default TableCells;
