import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./Countris.css";
// import Country from "./Country/Country";

const Countirs = () => {
  const [countris, setCountris] = useState([]);

  const [visitedCountries , setVisitedCountry] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountris(data));
  }, []);

  const handelVisitedCountry = country =>{
    console.log('added to this your vistied countrys')
    const newVisitedCountris = [...visitedCountries, country];
    setVisitedCountry(newVisitedCountris)
  }

  return (
    <div>
      <h3>Countris :{countris.length}</h3>
      <div>
      <h5>Visited countis :{visitedCountries.length}</h5>
      <ul>
       {
        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
       }

      </ul>
      </div>
      <div className="country-continer">
        {countris.map((country) => (
          <Country 
          key={country.cca3} 
          handelVisitedCountry={handelVisitedCountry}
          country={country}>
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countirs;
