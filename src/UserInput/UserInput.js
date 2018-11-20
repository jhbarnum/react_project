import React from 'react';

const userinput = (props) => {
    return (
        <div>
            <p> {props.name}</p>
            <input type="text" onChange={props.changed} value={props.username} />
        </div>

    )
};

export default userinput;