import React, { Component } from 'react'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'


export default class PageContent extends Component {

    openNav = () => {
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
    }
    render() {
        return (
            <div class="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
                <span class="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style={{ width: "auto", right: 0 }} onClick={this.openNav}><i class="fa fa-bars"></i></span>
                <Home />
                <Portfolio />
                <About />
                <Contact />
                {this.props.children}
            </div>
        )
    }
}