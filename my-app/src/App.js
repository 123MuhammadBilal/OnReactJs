import React,{useState} from 'react';
import MyErvena from './MyErvena';
import MyLights from './MyLights';
import MyInovation from './MyInovation';


function App() {
  const [show,setShow]= useState(true)
  const [light,setlight]= useState(false)
  const [inovation,setinovation]= useState(false)
  
  const ShowName = ()=>{
      setShow(false)
      setlight(true)
      setinovation(false)
  }
  const inov = ()=>{
      setShow(true)
      setlight(false)
      setinovation(false)
  }
  const home = ()=>{
    setShow(false)
    setlight(false)
    setinovation(true)
}
  return (
    <div>
      <div className="navigation">

      <li onClick={ShowName} >Ervena</li>
      <li onClick={home} >Home</li>
      <li onClick={inov} >Innovation</li>

      </div>
      
      {
        show && (<MyErvena name="MyErvena" />)
      }
      {
        light && ( <MyLights name="MyLights" />)
      }
      {
        inovation && ( <MyInovation name="MyInovation" />)
      } 
    </div>
 
 );
}

export default App;


