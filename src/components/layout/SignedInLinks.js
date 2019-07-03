import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/action/authAction'

const SignedInLinks = (props) => (
    <ul className="right">
        <li><NavLink to='/create-project'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
)

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(SignedInLinks)
