import React from 'react'

const Smurf = props => {

    return (
        <div className="smurf">
            <h3>Name: </h3><span>{props.smurf.name}</span>
            <h3>Age: </h3><span>{props.smurf.age}</span>
            <h3>Height: </h3><span>{props.smurf.height}</span>
        </div>
    )
}

export default Smurf