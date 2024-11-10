import { useState } from "react"

 
 
 export default function Count (){
  const [Count, setCount] = useState(11);
  const handelAdd = () =>{
    const newTeam = Count + 1;
    setCount(newTeam)
  }
  const handelRemov=()=>{
    const newTeam = Count-1;
    setCount(newTeam)
  }

  const teamStyle = {
    border:'2px solid purple',
    margin:'15px',
    padding:'15px',
    borderRadius:'15px'
  }
  return(
    <div style={teamStyle}>
      <h3>Players : {Count}</h3>
      <button onClick={handelAdd}>add</button>
      <button onClick={handelRemov}>Remove</button>
    </div>
  )
 }