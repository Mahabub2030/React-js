import { useState } from "react"

export default function Product (){

  const [Product ,setProduct] = useState(0);

  const addProduct=()=>{
    const newProduct = Product +1;
    setProduct(newProduct)

  }
  const removeProduct=()=>{
    const removeProduct = Product -1;
    setProduct(removeProduct)
  }

  return(
    <div className="box">
      <h1>Pruduct :{Product}</h1>
      <button onClick={addProduct}>Add</button>
      <button onClick={removeProduct}>Remove</button>
    </div>
  )
}