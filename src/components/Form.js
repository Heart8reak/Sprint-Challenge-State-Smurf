import React from 'react'
import { addSmurf } from '../redux/actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createSmurf = (e) => {
        e.preventDefault()
        const { name, age, height } = this.state
        this.props.addSmurf(name, age, height)
            .catch((err => {
                console.log(err)
            }))
        this.setState = {
            name: '',
            age: '',
            height: ''
        }
    }

    render() {
        const { name, age, height } = this.state
        const { fetchingSmurf, error } = this.state

        return (
            <div className="form-body">
                <form
                    className="form"
                    onSubmit={this.createSmurf}
                >
                    {error && <p>{error}</p>}
                    <h3>Create a New Smurf</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="height"
                        placeholder="Height"
                        value={height}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    {fetchingSmurf ? <p>Loading...</p> : <button type="submit">Create Smurf</button>}
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addSmurf
}

const mapStateToProps = (state) => ({
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))