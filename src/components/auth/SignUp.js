import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/action/authAction'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props
        if(auth.uid) return <Redirect to={'/'} />
        return (
            <div style={{marginTop: -20}} className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <input required type="email" id="email" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input required type="password" id="password" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                        <input required type="text" id="firstName" onChange={this.handleChange}/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field">
                        <input required type="text" id="lastName" onChange={this.handleChange}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        { authError && 
                            <div className="red-text center">
                                <p>{authError}</p>
                            </div>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    authError: state.auth.authError,
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (newUser) => dispatch(signUp(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
