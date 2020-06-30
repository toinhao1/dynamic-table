import React from 'react';
import { useSelector } from 'react-redux';

import TableCells from './TableCells';

const TableRows = (props) => {
	const { dropdown, data } = useSelector((state) => state);

	return (
		<>
			{props.arrayOfRows &&
				[...props.arrayOfRows].map((x, index) => {
					return (
						<tr key={index + 'odfbeuwib'}>
							<TableCells />
						</tr>
					);
				})}
		</>
	);
};

export default TableRows;
