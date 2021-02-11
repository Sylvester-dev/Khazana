import React,{useState} from 'react';
import './color.css';
import { Button } from '@material-ui/core';
function Color() {

  const [r , setR] = useState('0');
  const [g , setG] = useState('0');
  const [b , setB] = useState('0');
  const inputEventR = (e) => {
    // console.log(e.target.value); 
    setR(e.target.value);
}
  const inputEventG = (e) => {
    // console.log(e.target.value);
    setG(e.target.value);
}
  const inputEventB = (e) => {
    // console.log(e.target.value); 
    setB(e.target.value);
}
 
localStorage.setItem("r",r);
var r1 = localStorage.getItem("r");
localStorage.setItem("g",g);
var g1 = localStorage.getItem("g");
localStorage.setItem("b",b);
var b1 = localStorage.getItem("b");
// console.log(r1);

  var red = document.getElementById('red').value;
   console.log(red);
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;
  var color = 'rgb('+red+','+green+','+blue+')';
  console.log(color);
  document.body.style.backgroundColor = color;
  document.getElementById('oo').style.backgroundColor=color;

// document.getElementById('red').addEventListener('input',myColor);
// document.getElementById('green').addEventListener('input',myColor);
// document.getElementById('blue').addEventListener('input',myColor);
  return (
    <div id="oo">
      <div className="main">
        Choose your RGB<h1 id="box">{r},{g},{b}</h1>
        Red:<input type="range" id="red" onChange={inputEventR} value={r}  min="0" max="255"/>
        Green:<input type="range" id="green" onChange={inputEventG} value={g}  min="0" max="255"/>
        Blue:<input type="range" id="blue" onChange={inputEventB} value={b} min="0" max="255"/>
        <Button variant="contained" color="primary" type="submit">Make Token</Button>
      </div>
    </div>
  )
}

export default Color
