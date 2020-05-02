import React from 'react';
import Languages from './Languages'


const CountryInfo = (props) => {
    console.log(props.weatherData.temperature)
   

    return(
        <div>
        <h1>{props.country.name}</h1>
    <p>Capital: {props.country.capital}</p>
    <p>Population: {props.country.population}</p>
    <h2>Languages</h2>
    <Languages languages={props.country.languages} />
    <img src={props.country.flag} />
    <h2>Weather in {props.country.capital}</h2>
    <p><strong>temperature</strong>: {props.weatherData.temperature} </p>
    <img src={props.weatherData.weather_icons} />
    <p><strong>wind: </strong>{props.weatherData.wind_speed} mph direction {props.weatherData.wind_dir}</p>
    </div>
    )
}

export default CountryInfo