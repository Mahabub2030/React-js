
import { useState } from 'react';
import './Country.css'
const Country = ({country, handelVisitedCountry}) => {
  const {name,flags, population,area,cca3} = country;

  const [viseited ,setVisited] = useState(false);
  const handelVisited =()=>{
    setVisited(!viseited);

  }

 


  
  return (
    <div className={`country ${viseited && 'visited'}`}>
      <h3 style={{color:viseited ? 'Purple':'white'}}>Name : {name.common}</h3>
      <img src={flags.png} alt=''/>
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p><small>Code:{cca3}</small></p>
      <button onClick={()=>handelVisitedCountry(country.name)}>Mark Visited</button>
      <br />
      <button onClick={handelVisited}>{ viseited ?'Visited' : 'Going'}</button>
      {viseited ? ' i am visited this country': ' i would like to visit'}
    </div>
  );
};

export default Country;