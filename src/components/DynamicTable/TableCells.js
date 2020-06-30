import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TableCells = (props) => {
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
	return (
		<>
			{dropdown.dropdownOptions &&
				dropdown.dropdownOptions.map((each, index) => {
					return <td key={index}>{''}</td>;
				})}
		</>
	);
};

export default TableCells;
