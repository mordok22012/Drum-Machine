import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DrumPadBox from "./components/drumPadBox";
import { useState } from "react";

import "./App.css";

function App() {
  //states
  const [volume, setVolume] = useState(0.5);
  const [displayContent, setDisplayContent] = useState("hola");
  const [powerValue, setPowerValue] = useState(false);
  const [bankChecked, setBankChecked] = useState(false);
  
 // Función para actualizar el estado del display en el componente padre
 const updateDisplayState = (newValue) => {
  setDisplayContent(newValue);
};

  //Change Handling Functions
  const togglePower = () => {
    setPowerValue(!powerValue);
  }

  const handleBankButton = () => {
    setBankChecked(!bankChecked);
    console.log(!bankChecked);
  }

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value); 
    setVolume(newVolume);
    updateDisplayState(`volumen : ${parseInt(volume * 100)}`);
    
    setTimeout(() => {
      setDisplayContent('');
    }, 4000);
  }

 
 
  
 

  return (
    <Container className="d-flex min-vh-100 flex-column align-items-center justify-content-center ">
      <Row><h1>Drum Machine</h1></Row>
      <Row id="drum-machine" md={2} className="">
        <Col  md={6} className="">
          <DrumPadBox 
            bankChecked={bankChecked}  
            updateDisplayState = {updateDisplayState} 
            volume = {volume}
            powerValue = {powerValue}/>
        </Col>

        <Col md={6} className="fw-bold d-flex flex-column justify-content-center" >
          <div  id="display" className="mb-4">{displayContent}</div>
          <Form className="d-flex flex-column justify-content-center">
            <Form.Check 
              type="switch"
              id="powerButton"
              label="Power"
              checked= {powerValue}
              onChange={togglePower}
              
              
            />
            <label htmlFor="customRange" className="form-label p-3">
              <input
              type="range"
              className="form-range"
              min="0"
              max="1"
              step="0.01" 
              id="customRange"
              value={volume}
              onChange={handleVolumeChange}
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

