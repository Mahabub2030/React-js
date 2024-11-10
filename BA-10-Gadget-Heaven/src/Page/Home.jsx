import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {

  const [ categorys, setCategorys] = useState([]);

  useEffect( ()=>{
    fetch('Products.json')
    .then(res => res.json())
    .then(data =>setCategorys(data))
    console.log(categorys);
    
  }  ,[])



  return (
    <div className="container mx-auto h-[500px]">
      <h1 className="text-6xl font-bold mt-10 text-center">Explore Cutting-Edge Gadgets</h1>
      <div className="grid grid-cols-3">
       {
        categorys.map(cateory=> <Card Card={Card} key={cateory.product_id}>{cateory}</Card>)
       }
      </div>
    </div>
  );
};

export default Home;