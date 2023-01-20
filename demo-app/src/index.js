import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
var React= require('react')
var ReactDOM= require('react-dom')
*/

//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById('root'))


// var h1 = document.createElement('h1')
// h1.innerHTML= "Welcome To REACT"
// document.getElementById("root").appendChild(h1)


//import React from "react";
//import ReactDOM from "react-dom";

const fname= "Nishant"
const lname= "Gautam"
const date= new Date()
const img1= "https://picsum.photos/200/300"
const img2= "https://picsum.photos/250/300"
const img3= "https://picsum.photos/270/300"
const img4= "https://picsum.photos/290/300"


let curDate= new Date().getHours()
console.log(curDate)
let greeting=""
if(curDate<12) greeting= "Good Morning"
else if(curDate>=12 && curDate<19) greeting= "Good Afternoon"
else greeting= "Good Night"
ReactDOM.render(
  <>
    <h1>HeLLo, {greeting}</h1>
    <p contentEditable="true">{fname+" "+lname}</p>
    <p>You are a web developer at woco</p>
    <p>{`Current date is ${date.toLocaleDateString()}`}</p>
    <p>{`Current Time is ${date.toLocaleTimeString()}`}</p>
    
    <a href="https://picsum.photos/" target="_redirect">
    <img src={img1} alt="randomImages"/>
    <img src={img2} alt="randomImages"/>
    <img src={img3} alt="randomImages"/>
    <img src={img4} alt="randomImages"/>
    </a>
    
    <ul> 
      <li>REACT</li>
      <li>Node.js</li>
      <li>MongoDB</li>
    </ul>
  </>,
  document.getElementById("root")
);
