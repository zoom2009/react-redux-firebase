import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { Navbar } from 'react-materialize'

const NavbarComponent = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <Navbar className="grey darken-3" brand={<a style={{padding: '0 10px'}}>Sikarin</a>} alignLinks="right">
            {links}
        </Navbar>
    )
}

const mapStateToprops = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToprops)(NavbarComponent)
