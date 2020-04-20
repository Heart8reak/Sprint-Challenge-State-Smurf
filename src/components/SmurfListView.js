import React from 'react'
import { connect } from 'react-redux'
import SmurfList from './SmurfList'

import { fetchData } from '../redux/actions/actions'
import {withRouter } from 'react-router-dom'

class SmurfListView extends React.Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return (
                <h3>Fetching Smurfs...</h3>
            )
        }
        return (
            <div className="smurflist">
                <SmurfList smurfs={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default withRouter(connect(mapStateToProps, { fetchData })(SmurfListView))