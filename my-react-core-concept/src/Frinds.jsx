import { useState } from 'react'
import './Frinds.css'

export default function Frinds(){

  const [frinds, setFrind] = useState(0);

const FrindAdd =()=>{
  const newFrind = frinds +1 
  setFrind(newFrind)
    
  }
  const FrindRemove=()=>{
    const oldFrind = frinds -2;
    setFrind(oldFrind)
  }
  
  return(
    <div className='box'>
      <h3>Frinds : {frinds}</h3>
      <button onClick={FrindAdd}>AddFrind</button>
      <button onClick={FrindRemove}>RemoveFrind</button>

    </div>
  )
}