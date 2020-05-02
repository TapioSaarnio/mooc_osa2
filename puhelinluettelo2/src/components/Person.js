import React from 'react'

const Person = (props) => {
    
    return(
    <li>
        <span>{props.person.name}: {props.person.number}</span><button id='delete' onClick={props.deletePerson}>delete</button>
    </li>
)
}

export default Person

