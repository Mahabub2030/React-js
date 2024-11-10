

import { useState } from 'react'
import './App.css'
import Watch from './comoponents/Watch/Watch'
import { useEffect } from 'react';


function App() {

 const [ watches , setwatches] = useState ([]);
 useEffect( ()=>{
  fetch('wactch.json')
  .then (res => res.json())
  .then(data => setwatches(data))
 } ,[])


  return (
    <>
      <h1>Pruducts From US</h1>

     {
      watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
     }
    </>
  )
}

export default App
