import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])    // ekadhik value asbe tai [ ]

    const handleVisitedCountries = (country) => {
        console.log("Handle visited countery clilcked", country)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)



    return (
        <div>
            <h1 className='textCenter'>In the countries : {countries.length}</h1>
            <h3>Total Country Visited : </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        handleVisitedCountries={handleVisitedCountries}
                        key={country.cca3.cca3}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;