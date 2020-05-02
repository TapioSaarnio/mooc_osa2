import React from 'react'

const Find = (props) => {

    return (
        <div>
            find countries <input value={props.find} onChange={props.handleChangeFind} />
        </div>
    )
}

export default Find