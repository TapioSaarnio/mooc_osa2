import React from 'react'




const Total = (props) => {
    
    var total = props.parts.reduce(function(sum, part){
   
        return sum + part.exercises;

    }, 0)

    return (
        <div>
            <strong>total of {total} exercises</strong>
        </div>

    )
}

export default Total