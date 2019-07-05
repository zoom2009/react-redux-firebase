/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/action/authAction'

const SignedInLinks = (props) => {
    let shortName = ''
    if (props.profile && !props.profile.isEmpty) shortName = props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
    return(
        <ul className="right">
            <li><NavLink to='/create-project'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{shortName}</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => ({
    profile: state.firebase.profile
})

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
