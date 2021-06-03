import React, { useState, useEffect } from 'react';
import DetailsCountry from '../DetailsCountry/DetailsCountry';


const Country = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    })

    const handleChange = (e) => {
       console.log(e.target.value)
    }

    return (
      <div>
        <h3>total Country: {country.length}</h3>
        <form>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          
        </form>
        {country
          .filter((con) => {
            if (con === "") {
              return con;
            } else if (con.name.toLowerCase().includes(search.toLowerCase())) {
              return con;
            }
          })
          .map((country) => (
            <DetailsCountry country={country} />
          ))}
      </div>
    );
};

export default Country;