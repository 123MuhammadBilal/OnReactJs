import React,{useState} from 'react';
import MyComponent from './MyComponent';

function App() {
  const [show,setShow]= useState(false)
  const ShowName = ()=>{
    if(show == true){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  return (
    <div>
      <div className="navigation">
      <li onClick={ShowName} >Ervena</li>
      <li onClick={ShowName} >Home</li>
      <li onClick={ShowName} >Fashion</li>
      </div>
      
      {
        show && (<MyComponent name="mycomponents" />)
      }
    </div>
 
 );
}

export default App;


