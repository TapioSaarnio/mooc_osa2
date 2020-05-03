import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Countries from './components/Countries'
import'./index.css'

function App() {

const [countries, setCountries] = useState([])
const [countriesToShow, setCountriesToShow] = useState([])
const [find, setFind] = useState([])

const url = ('https://restcountries.eu/rest/v2/all')

useEffect(() => {

  axios.get(url)
      .then(response =>{
        setCountries(response.data)
        setCountriesToShow(response.data)
      })
}, [])



const handleChangeFind = (event) => {
  setFind(event.target.value)

  var countriesToShowCopy = []
  countriesToShowCopy = countries.filter(count => count.name.toString().toUpperCase().includes(event.target.value.toString().toUpperCase()))
  
  setCountriesToShow(countriesToShowCopy)
  
}

  return (
    <div >
      find countries<input value={find} onChange={handleChangeFind}></input>
    <Countries key='Countries' countriesToShow={countriesToShow} />
    </div>
  );
  }

export default App;
