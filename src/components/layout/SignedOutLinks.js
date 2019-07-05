import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <li className="sidenav-close"><Link to='/signup'>Signup</Link></li>
        <li className="sidenav-close"><Link to='/signin'>Login</Link></li>
    </div>
)
