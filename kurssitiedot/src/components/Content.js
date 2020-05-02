import React from 'react'
import Part from './Part'



const Content = (props) => {

    var contents = props.parts.map((part, i) =>

            <Part key={i} name={part.name} exercises={part.exercises} />
    )

    return (
        contents
    )
    
}


export default Content