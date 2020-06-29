import React, { useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import DynamicTable from "../DynamicTable/DynamicTable";
import { closeTableModal } from "../../store/actions/components";
import "./styles.css";

const TableModal = () => {
  const [dataHeaders, setDataHeaders] = useState("");
  const [numberOfRows, setNumberOfRows] = useState("");
  const [arrayOfRows, setArrayofRows] = useState([]);
  const [columnsToDisplay, setColumnsToDisplay] = useState();

  const { components, data } = useSelector(state => state);
  const dispatch = useDispatch();

  const closeModal = () => {
    setDataHeaders("");
    setNumberOfRows("");
    setArrayofRows("");
    setColumnsToDisplay("");
    dispatch(closeTableModal());
  };

  const handleDataHeaderChange = e => {
    let value = e.currentTarget.value;
    setDataHeaders(value);
    if (value) {
      const rangeOfNumbers = value.match(/\d+/g).map(x => +x);
      setColumnsToDisplay(_.range(rangeOfNumbers[0], rangeOfNumbers[1] + 1));
      handleSettingNumberOfRows(
        value
          .match(/\d+/g)
          .map(x => +x)
          .reduce((a, b) => a + b)
      );
    }
  };

  const handleNumberOfRows = e => {
    let value = e.currentTarget.value;
    handleSettingNumberOfRows(value);
  };

  const handleSettingNumberOfRows = length => {
    setNumberOfRows(length);
    let arrayToMap = [];
    arrayToMap.length = length;
    setArrayofRows(arrayToMap);
  };

  return (
    <Modal
      dialogClassName="modal-styles"
      show={components.tableModalIsOpen}
      onHide={closeModal}
      centered
    >
      <Modal.Header closeButton>
        <Row>
          <Modal.Title>Import from {data.fileName}</Modal.Title>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <div className="input-container">
          <Row>
            <Col>
              Number Of Data Headers
              <InputGroup>
                <FormControl
                  value={dataHeaders}
                  onChange={handleDataHeaderChange}
                  type="text"
                />
              </InputGroup>
            </Col>
            <Col>
              Number Of Rows
              <InputGroup>
                <FormControl
                  value={numberOfRows}
                  onChange={handleNumberOfRows}
                  type="number"
                  min="0"
                />
              </InputGroup>
            </Col>
          </Row>
        </div>
        <DynamicTable
          columnsToDisplay={columnsToDisplay}
          arrayOfRows={arrayOfRows}
          dataHeaders={dataHeaders}
        />
        <div className="button-container">
          <Button onClick={closeModal}>Cancel</Button>
          <Button variant="dark">Import</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TableModal;
