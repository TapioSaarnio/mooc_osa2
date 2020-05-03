import React from 'react'

const Country = (props) => {

    return(
    <div>
    <span>{props.name}</span>
    </div>
    )
}

const CountryInfo = (props) => {

    return (
        <div>
            <h1>{props.country.name}</h1>
            <p>capital: {props.country.capital}</p>
    <p>population: {props.country.population}</p>
    <h2>Languages</h2>
    <ul>
    {props.country.languages.map((language, i) => 
        <li key={i}>{language.name}</li>
    )}
    </ul>
    <img alt='The flag of the country' id = 'flag' src={props.country.flag}></img>
     </div>
    )


}

const Countries = (props) => {



    if(props.countriesToShow.length === 1){

        return (
            <CountryInfo key={props.countriesToShow[0].name} country={props.countriesToShow[0]} />
        )
    }

    if(props.countriesToShow.length > 10){
        return (
            
                <p>Too many matches, specify another filter</p>
            
        )
    }

    
        if(props.countriesToShow.length <= 10){

            return (
                props.countriesToShow.map((country, i) =>

                <span>
                 <Country key={i} name={country.name} />
                 </span>
                
                )
            )     
        }

}


export default Countries