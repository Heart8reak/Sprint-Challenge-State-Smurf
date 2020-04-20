import React from 'react'

const Smurf = props => {

    return (
        <div className="smurf">
            <h3>Name: <span>{props.smurf.name}</span></h3>
            <h3>Age: <span>{props.smurf.age}</span></h3>
            <h3>Height: <span>{props.smurf.height}</span></h3>
        </div>
    )
}

export default Smurf