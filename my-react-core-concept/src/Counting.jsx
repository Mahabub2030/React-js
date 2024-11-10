import { useState } from "react"

export default function Counting(){
  const [counting, setCounting] = useState(0);

  const handelAdd=()=>{
    const newCount = counting +4;
    setCounting(newCount)
  }
  const handelReduce=()=>{
    const newCount = counting-2;
    setCounting(newCount)
  }

  return(
    <div className="box">
      <h3>Countery: {counting}</h3>
      <button onClick={handelAdd}>add</button>
      <button onClick={handelReduce}>Remov</button>
    </div>
  )
}