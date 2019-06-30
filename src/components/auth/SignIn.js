import React, { Component } from 'react'

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
