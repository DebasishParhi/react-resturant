import { useState } from "react";
import { Form } from "./components/Form";
import { Res } from "./components/Show";
import "./App.css";

function App() {
  const [rate, setRate] = useState(0);
  const [type, setType] = useState("")
  const [num,setNum] = useState(0)
  const handleButton = (el)=>{
    setRate(el.target.id)
    setNum(0)
  }
  const handlecash=(el)=>{
    setType("true")
    setNum(1)
  }
  const handleCard=(el)=>{
    setType("false")
    setNum(1)
  }
  const handleAll=(el)=>{
    setType("0")
    setNum(1)
  }

  return (
    <div className="App">
      <Form />
      <div>
        <button className="btn" id="one" onClick={handleButton}>1star</button>
        <button className="btn" id="two" onClick={handleButton}>2star</button>
        <button className="btn" id="three" onClick={handleButton}>3star</button>
        <button className="btn" id="four" onClick={handleButton}>4star</button>
      </div>
      <div>
        <button className="btn" id="" onClick={handlecash}>cash only</button>
        <button className="btn" id="" onClick={handleCard}>card only</button>
        <button className="btn" onClick={handleAll}> all</button>
      </div>
      <Res rate={rate} type={type} num={num}/>
      
    </div>
  );
}

export default App;