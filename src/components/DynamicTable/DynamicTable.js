import React from 'react';
import { Table } from 'react-bootstrap';

import TableHeaders from './TableHeaders';
import TableRows from './TableRows';

import './styles.css';

const DynamicTable = (props) => {
	return (
		<div className="table-container">
			<Table responsive striped bordered hover>
				<thead>
					<TableHeaders
						columnsToDisplay={props.columnsToDisplay}
						dataHeaders={props.dataHeaders}
					/>
				</thead>
				<tbody>
					<TableRows
						numberOfRows={props.numberOfRows}
						numberOfCols={props.columnsToDisplay}
						columnsToDisplay={props.columnsToDisplay}
					/>
				</tbody>
			</Table>
		</div>
	);
};

export default DynamicTable;
