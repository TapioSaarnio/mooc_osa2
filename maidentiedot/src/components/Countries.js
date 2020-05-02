import React, {useState, useEffect} from 'react';
import Country from './Country'
import CountryInfo from './CountryInfo'

const Countries = (props) => {

    
    if(props.countriesToShow.length > 10){

        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
     if(props.countriesToShow.length === 1){

        console.log(props.weatherData)

        return (
            
            <CountryInfo country={props.countriesToShow[0]} weatherData={props.weatherData} />
        )
     }

    return( props.countriesToShow.map(country =>
        
        <Country key={country.name} country={country} />
        )
    )
         
}

export default Countries