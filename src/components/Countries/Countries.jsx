import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {


    const [visitedCountries, setVisitedCountries] = useState([])    // ekadhik value asbe tai [ ]
    const [visitedFlags, setVisitedFlags] = useState([])

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    const handleVisitedCountries = (country) => {
        // console.log("Handle visited countery clilcked", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        // console.log("Flag need to be added", flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }



    return (
        <div>
            <h1 className='textCenter'>Total Countries : {countries.length}</h1>
            <h3 className='margin-auto'>Visited Countris : {visitedCountries.length}</h3>
            <h3 className='margin-auto'>Total Flags Visited : {visitedFlags.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>


            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag ,index)=> <img key={index} src={flag} alt=''></img>)
                }
            </div>



            <div className='countries'>
                {
                    countries.map(country => <Country
                        handleVisitedCountries={handleVisitedCountries}
                        key={country.cca3.cca3}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}>

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;