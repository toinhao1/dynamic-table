import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TableCells = ({ columnsToDisplay }) => {
	const { dropdown, data } = useSelector((state) => state);

	// useEffect(() => {
	// 	console.log(props.numberOfCols);

	// 	props.numberOfCols.length += 1;
	// }, [props.numberOfCols]);
	// const renderCorrectData = () => {
	//   for (let key in dropdown.paramsObject) {
	//     if (dropdown.paramsObject[key].columnIndex) {
	//       dropdown.dropdownOptions.map((each, index) => {

	// 				return <td key={index}>{''}</td>;
	// 			})
	//     }
	//   }
	// }
	console.log(columnsToDisplay);
	return (
		<>
			{columnsToDisplay &&
				[...columnsToDisplay, 0].map((each, index) => {
					return <td key={index}>{''}</td>;
				})}
		</>
	);
};

export default TableCells;
