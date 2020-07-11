import React from 'react';
import { useSelector } from 'react-redux';

import TableCells from './TableCells';

const TableRows = ({ numberOfRows, columnsToDisplay }) => {
	const { parsedData } = useSelector((state) => state.data);

	return (
		<>
			{numberOfRows &&
				parsedData['Device Type'].slice(numberOfRows).map((x, index) => {
					return (
						<tr key={x.id}>
							<TableCells
								rowIndex={index + +numberOfRows - 1}
								columnsToDisplay={columnsToDisplay}
							/>
						</tr>
					);
				})}
		</>
	);
};

export default TableRows;
