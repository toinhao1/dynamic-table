import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "react-bootstrap";
import {
  setFirstColStatus,
  dropDownOptionSelected
} from "../../store/actions/dropdown";

import "./styles.css";

const ColumnDropDown = props => {
  const { dropdown } = useSelector(state => state);
  const [selectedOption, setOption] = useState("");
  const dispatch = useDispatch();

  const handleSetOption = option => {
    if (
      (option === "(Skip)" && selectedOption === "(Skip)") ||
      (option === "(Skip)" && !selectedOption)
    ) {
      return;
    }
    console.log(selectedOption);
    dispatch(dropDownOptionSelected(props.columnIndex, option, selectedOption));
    setOption(option);
    if (props.columnIndex === 0 && option === dropdown.dropdownOptions[0]) {
      dispatch(setFirstColStatus(true));
    } else if (
      props.columnIndex === 0 &&
      option !== dropdown.dropdownOptions[0]
    ) {
      dispatch(setFirstColStatus(false));
    }
  };

  if (props.dataHeaders) {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle>{selectedOption || "(Skip)"}</Dropdown.Toggle>
          <Dropdown.Menu id="nav-dropdown-menu">
            {dropdown.dynamicOptions.map(option => {
              return (
                <div key={option + "kdfjbsdf89347934"}>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => handleSetOption(option)}>
                    {option}
                  </Dropdown.Item>
                </div>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle>{"(Skip)"}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>No Options</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ColumnDropDown;
