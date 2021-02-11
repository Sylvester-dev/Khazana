import React,{useState} from 'react';
import './color.css';
function Color() {
  const [r , setR] = useState('');
  const [g , setG] = useState('');
  const [b , setB] = useState('');
  const inputEventR = (e) => {
    console.log(e.target.value); 
    setR(e.target.value);
}
  const inputEventG = (e) => {
    console.log(e.target.value); 
    setG(e.target.value);
}
  const inputEventB = (e) => {
    console.log(e.target.value); 
    setB(e.target.value);
}
  return (
    <div id="oo">
      <div className="main">
        <label>RGB:</label><h1>{r},{g},{b}</h1>
        <label>Red:</label><input type="range" id="red" name="co" onChange={inputEventR}  value={r} min="0" max="255"/>
        Green:<input type="range" id="green" onChange={inputEventG}  value={g} min="0" max="255"/>
        Blue:<input type="range" id="blue" onChange={inputEventB}  value={b} min="0" max="255"/>

      </div>
    </div>
  )
}

export default Color
