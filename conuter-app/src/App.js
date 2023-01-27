import React from 'react';
import './App.css';
var a=0;
const onIncrement=()=>{
   a++
   document.getElementById('demo').innerHTML=a;
}
const onDcrement=()=>{
  a--
  document.getElementById('demo').innerHTML=a;
}
const onReset=()=>{
  a=0;
  document.getElementById('demo').innerHTML=a;
}
function App() {
  return (
    <div className="App">
      <button onClick={onIncrement}>INCREMENT</button>
      <h1 id="demo">0</h1>
      <button onClick={onDcrement}>DECREMENT</button>
      <button onClick={onReset}>DECREMENT</button>
    </div>
  );
}

export default App;
