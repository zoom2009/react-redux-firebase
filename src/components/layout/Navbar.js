import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <nav>
            <div className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Sikarin</Link>
                    {links}
                </div>
            </div>
        </nav>
    )
}

const mapStateToprops = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToprops)(Navbar)
