/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/action/authAction'

const SignedInLinks = (props) => {
    let shortName = ''
    if (props.profile && !props.profile.isEmpty) shortName = props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
    return(
        <div>
            <li className="sidenav-close"><Link to='/create-project'>New Project</Link></li>
            <li className="sidenav-close" style={{ cursor: 'pointer' }}><a onClick={props.signOut}>Log Out</a></li>
            <NavLink className="sidenav-close" style={{marginLeft: 30}} to='/' className='btn btn-floating pink lighten-1 text-center'>{shortName}</NavLink>
        </div>
    )
}

const mapStateToProps = (state) => ({
    profile: state.firebase.profile
})

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
