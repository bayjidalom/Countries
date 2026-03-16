
import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country.area.area)

    const [visited, setVisited] = useState(false)

    const handlerVisited = () => {
        // setVisited(true)          // visited theke change hobe na

        // way -- basic
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // way--03 easy
        // setVisited(visited ? false : true )

        // way--04
        setVisited(!visited)


    }
    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>

        <div className={`country ${visited && 'country-visited'}`}>

            <img className='img' src={country.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <p>Region : {country.region.region}</p>
            {/* <p>Capital : {country.capital.capital}</p> */}
            <p>Area : {country.area.area} - {country.area.area > 30000 ? "Big Country" : "Small country"}</p>

            <button onClick={handlerVisited}> 
                {visited ? "Visited" : "Not visited"}
            </button>

        </div>
    );
};

export default Country;




/**CSS 4 ways
 * 1. inline css (style object)
 * 2. 
 */