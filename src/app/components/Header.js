import React from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

export default function Header() {
    return (
        <React.Fragment>
            <Sidebar />
            <Navigation></Navigation>
        </React.Fragment>
    )
}