import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import "./App.css";

function App() {
  //states
  const [rangeValue, setRangeValue] = useState(50);
  const [displayContent, setDisplayContent] = useState("");

  //Change Handling Functions
  
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    setDisplayContent(event.target.value);
  }
  return (
    <Container className="d-flex min-vh-100 flex-column align-items-center justify-content-center ">
      <Row><h1>Drum Machine</h1></Row>
      <Row id="drum-machine" md={2} className="">
        <Col id="drumPadBox" md={6} className="">
        <button className="drum-pad ">Q</button>
        <button className="drum-pad ">W</button>
        <button className="drum-pad ">E</button>
        <button className="drum-pad ">A</button>
        <button className="drum-pad ">S</button>
        <button className="drum-pad ">D</button>
        <button className="drum-pad ">Z</button>
        <button className="drum-pad ">X</button>
        <button className="drum-pad ">C</button>
        </Col>

        <Col md={6} className="fw-bold d-flex flex-column justify-content-center" >
          <div  id="display" className="p-4 mb-4">{`Volumen : ${displayContent}`}</div>
          <Form className="d-flex flex-column justify-content-center">
            <Form.Check 
              type="switch"
              id="powerButton"
              label="Power"
              
              
            />
            <label htmlFor="customRange" className="form-label p-3">
              <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              id="customRange"
              value={rangeValue}
              onChange={handleRangeChange}
            ></input>
            
            </label>
            

            <Form.Check 
              type="switch"
              id="bandSwitch"
              label="Bank"
              
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

