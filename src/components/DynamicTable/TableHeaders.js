import React from 'react';
import { useSelector } from 'react-redux';

import ColumnDropDown from '../ColumnDropDown/ColumnDropDown';
import './styles.css';

const TableHeaders = (props) => {
	const { dropdown, data } = useSelector((state) => state);
	if (!dropdown.firstColSetCorrectly) {
		return (
			<tr>
				<th>
					<ColumnDropDown dataHeaders={props.dataHeaders} columnIndex={0} />
					<div>Parameter:</div>
					<br />
					<div>{data.excelData.column0[0].value}*</div>
				</th>
				<th />
				<th />
				<th />
				<th />
				<th />
				<th />
				<th />
			</tr>
		);
	}
	return (
		<tr>
			<th>
				<ColumnDropDown dataHeaders={props.dataHeaders} columnIndex={0} />
				<div>Parameter:</div>
				<br />
				<div>{dropdown.dropdownOptions[0]}*</div>
			</th>
			{dropdown.firstColSetCorrectly &&
				props.columnsToDisplay &&
				props.columnsToDisplay.map((item, index) => {
					return (
						<th key={index + 'diubsdfiu8732yr'}>
							<ColumnDropDown
								dataHeaders={props.dataHeaders}
								columnIndex={item}
							/>
							<div>Parameter:</div>
							<br />
							<div>{dropdown.dropdownOptions[item]}</div>
						</th>
					);
				})}
		</tr>
	);
};

export default TableHeaders;
