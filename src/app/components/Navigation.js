import React, { Component } from 'react'

export default class Navigation extends Component {
    closeNav = () => {
        return document.getElementById("mySidebar").style.display = "none"
    }

    render() {
        const nav = [{ navId: "#", name: "Home" }, { navId: "#work", name: "Work" }, { navId: "#about", name: "About" }, { navId: "#contact", name: "Contact" }]
        return (
            <React.Fragment>
                <nav className="w3-sidebar w3-black w3-animate-right w3-xxlarge" style={{ display: "none", paddingTop: "150px", right: 0, zIndex: 2 }} id="mySidebar">
                    <a href="#" onClick={this.closeNav} className="w3-button w3-black w3-xxxlarge w3-display-topright" style={{ padding: "0 12px" }}>
                        <i className="fa fa-remove"></i>
                    </a>
                    <div className="w3-bar-block w3-center">
                        {nav.map((iteam) => (<a href={iteam.navId} key={iteam.navId} className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>{iteam.name}</a>))}
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}