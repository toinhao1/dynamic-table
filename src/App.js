import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openTableModal } from "./store/actions/components";
import TableModal from "./components/TableModal/TableModal";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Excel Importer</h1>
      <Button variant="dark" onClick={() => dispatch(openTableModal())}>
        Upload A New File
      </Button>
      <TableModal />
    </div>
  );
}
