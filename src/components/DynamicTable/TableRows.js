import React from 'react';
import { useSelector } from 'react-redux';

import TableCells from './TableCells';

const TableRows = ({ numberOfRows, columnsToDisplay }) => {
	const { parsedData } = useSelector((state) => state.data);

	return (
		<>
			{numberOfRows &&
				parsedData['Device Type']
					.slice(numberOfRows, parsedData['Device Type'].length - 1)
					.map((x, index) => {
						return (
							<tr key={x.id}>
								<TableCells
									rowIndex={index}
									columnsToDisplay={columnsToDisplay}
								/>
							</tr>
						);
					})}
		</>
	);
};

export default TableRows;
