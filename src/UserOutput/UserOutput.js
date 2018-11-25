import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return <div>
        <p>{props.username}</p>
        <p>{props.name}</p>
        </div>
}

export default useroutput;