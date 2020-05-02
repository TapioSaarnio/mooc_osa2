import React, { useState, useEffect } from 'react'
import './App.css';
import Person from './components/Person'
import personService from './services/personService'
import Notification from './components/Notification'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [message, setMessage] = useState(null)

  useEffect(() => {

    personService.getAll()
         .then(initialPersons => {
           setPersons(initialPersons)
           setPersonsToShow(initialPersons)
        
  })
  }, [])

  const addPerson = (event) =>{

    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber,
      id:0
    }

    for (let i in persons){

      if(person.name === persons[i].name){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          
          person.id=persons[i].id

          personService.update(person.id, person).then(()=>{
          persons[i]=person
          setPersons(persons)
          setFilter('')
          setNewName('')
          setNewNumber('')
          })

          return

        }
        
      }
    }
    //const newPersons=persons.concat(person)
    personService.create(person).then(()=>{
      
      personService.getAll()
         .then(initialPersons => {
           setPersons(initialPersons)
           setPersonsToShow(initialPersons)
           setMessage(`${person.name} was added`)
           setTimeout(() => {
            setMessage(null)
          }, 5000)
        
  })
      setFilter('')
      setNewName('')
      setNewNumber('')
    })
    
  }




  const deletePersonOf = (id, name) => {
    
    if(!window.confirm(`Delete ${name}?`)){
       return
    }
      
    personService.deletePerson(id).then(response => {
      personService.getAll()
         .then(initialPersons => {
           setPersons(initialPersons)
           setPersonsToShow(initialPersons)
           setMessage(`${name} was deleted`)
           setFilter('')
           setNewName('')
           setNewNumber('')
           setTimeout(() => {
            setMessage(null)
          }, 5000)
        
  })

    })

  }

  const handleChangeName = (event) => {

    setNewName(event.target.value)

  }

  const handleChangeNumber = (event) => {

    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
    
    var personsToShowCopy = []
    let i = 0
    for (i=0;i < persons.length; i++){
      const personCopy = {
        name: persons[i].name,
        number: persons[i].number,
        id: persons[i].id
      }
      personsToShowCopy.push(personCopy)
      
    }
    personsToShowCopy=personsToShowCopy.filter(pers => pers.name.toString().toUpperCase().startsWith(event.target.value.toString().toUpperCase()))
    setFilter(event.target.value)
    setPersonsToShow(personsToShowCopy)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <div>filter shown with <input value={filter} onChange={handleChangeFilter}></input></div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
  name: <input value={newName} onChange={handleChangeName}/>
        </div>
  number: <input value={newNumber} onChange={handleChangeNumber} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {personsToShow.map((person, i) => 
        <Person key={i} person={person} deletePerson={() => deletePersonOf(person.id, person.name)} />
        )}
      </ul>
    </div>
  )
  



}
export default App;
