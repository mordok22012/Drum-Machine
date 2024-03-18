import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //states
  const [rangeValue, setRangeValue] = useState(50);
  const [displayContent, setDisplayContent] = useState("");
  const [powerChecked, setPowerChecked] = useState(false);
  const [bankChecked, setBankChecked] = useState(false);
  
  //audios
  const audioKits = [[],[]];

  //Change Handling Functions
  const handlePowerButton = (event) => {
    setPowerChecked(!powerChecked);
    console.log(!powerChecked);
  }

  const handleBankButton = (event) => {
    setBankChecked(!bankChecked);
    console.log(!bankChecked);
  }

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    setDisplayContent(` volumen : ${event.target.value}`);
  }
 
  
  const handleDrumPadChange = (event) => {
    console.log('Se hizo clic en el botón', event.target.textContent);
    document.getElementById(event.target.textContent).play(); 
   }

  return (
    <Container className="d-flex min-vh-100 flex-column align-items-center justify-content-center ">
      <Row><h1>Drum Machine</h1></Row>
      <Row id="drum-machine" md={2} className="">
        <Col id="drumPadBox" md={6} className="">
        <button className="drum-pad " onClick={handleDrumPadChange}>
         <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>Q
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
        <audio src="" className="clip" id="W"></audio>W
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="E"></audio>E
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="A"></audio>A
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="S"></audio>S
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="D"></audio>D
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="Z"></audio>Z
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="X"></audio>X
        </button>
        <button className="drum-pad" onClick={handleDrumPadChange}>
          <audio src="" className="clip" id="C"></audio>C
        </button>
        </Col>

        <Col md={6} className="fw-bold d-flex flex-column justify-content-center" >
          <div  id="display" className="p-4 mb-4">{displayContent}</div>
          <Form className="d-flex flex-column justify-content-center">
            <Form.Check 
              type="switch"
              id="powerButton"
              label="Power"
              checked= {powerChecked}
              onChange={handlePowerButton}
              
              
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
              checked= {bankChecked}
              onChange={handleBankButton}
              
              
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

