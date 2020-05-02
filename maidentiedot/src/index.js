import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import Find from './components/Find'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [find, setFind] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          console.log(response.data)
          setCountries(response.data)
        })
  },[])

  useEffect(() => {

    setToCountriesToShow()
    if(countriesToShow.length === 1){
                     axios
                     .get('http://api.weatherstack.com/current?access_key='+ api_key+'&query='+countriesToShow[0].capital)
                     .then(response => {
                       setWeatherData(response.data.current)
                       console.log(weatherData)
                     })
    }


  }, [find])

  const setToCountriesToShow = () => {

    const countriesFiltered = countries.filter(count => count.name.toString().toLowerCase().includes(find.toString().toLowerCase()))
    setCountriesToShow(countriesFiltered)
  }

  const handleChangeFind = (event) => {

    setFind(event.target.value)

  }

  return (
    <div>
      <Find handleChangeFind={handleChangeFind} find={find} />
      <Countries countriesToShow={countriesToShow} weatherData={weatherData}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
