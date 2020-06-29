import React from "react";
import TableCells from "./TableCells";

const TableRows = props => {
  return (
    <>
      {props.arrayOfRows &&
        [...props.arrayOfRows].map((x, index) => {
          return (
            <tr key={index + "odfbeuwib"}>
              <TableCells />
            </tr>
          );
        })}
    </>
  );
};

export default TableRows;
