import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div className='card'>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            {/* <h4>Main : {country.name.official}</h4> */}
            <p>Population : {country.population.population}</p>
            <p>Region : {country.region.region}</p>
            <p>Capital : {country.capital.capital}</p>

        </div>
    );
};

export default Country;