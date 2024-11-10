
import './App.css'
import './Countary'
import Count from './Countary'
import Counting from './Counting'
import Frinds from './Frinds'
import Product from './Product'


function App() {

  function handelCLike (){
    alert('button clicked')
  }
  function handedClike2(){
    alert('button clicked')
  }
 
  return (
    <>
      <h3>React Core Concepts 2 </h3>
    
    
      <Product></Product>
      <Counting></Counting>
      <Frinds></Frinds>
      <Count></Count>
     
      <button onClick={handelCLike}>click me</button>
      <button onClick={handedClike2}>Click 2</button>
    </>
  )
}




export default App
