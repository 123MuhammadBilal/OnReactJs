import React,{useState} from 'react';
//importing all components 
import MyErvena from './MyErvena';
import MyLights from './MyLights';
import MyInovation from './MyInovation';


function App() {
  // using arry & predefine function "Usestate" to hedle the component foreach Component
  const [show,setShow]= useState(false)
  const [light,setlight]= useState(false)
  const [inovation,setinovation]= useState(true)
  
  // function performance onClick 
  const ShowName = ()=>{
      setShow(false)
      setlight(true)
      setinovation(false)
  }
  // function performance onClick
  const inov = ()=>{
      setShow(true)
      setlight(false)
      setinovation(false)
  }
  // function performance onClick
  const home = ()=>{
    setShow(false)
    setlight(false)
    setinovation(true)
}
  return (
    <div>
      <div className="navigation">
      {/* navigation buttons to change component */}
      <li onClick={ShowName} >Ervena</li>
      <li onClick={home} >Home</li>
      <li onClick={inov} >Innovation</li>

      </div>
      {/* components are mentioned in bottom */}
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
