import React from "react";
import { useSelector } from "react-redux";

const TableCells = props => {
  const { dropdown } = useSelector(state => state);
  return (
    <>
      {dropdown.dropdownOptions &&
        dropdown.dropdownOptions.map((each, index) => {
          return <td>{"" + index}</td>;
        })}
    </>
  );
};

export default TableCells;
