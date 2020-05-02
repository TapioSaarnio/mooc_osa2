import React from 'react'

const Language = (props) => (

    <div>
        <p>{props.language}</p>
    </div>
)

const Languages = ({languages}) => (
    languages.map(lang =>
        <Language key={lang.name} language={lang.name} />
)
)

export default Languages

