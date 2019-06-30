import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/action/projectAction'

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <input required type="text" id="title" onChange={this.handleChange}/>
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea required id="content" className="materialize-textarea" onChange={this.handleChange}/>
                        <label htmlFor="content">Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createProject: (project) => dispatch(createProject(project))
})

export default connect(null, mapDispatchToProps)(CreateProject)
