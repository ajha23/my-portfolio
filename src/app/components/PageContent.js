import React, { Component } from 'react'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Database from './Firebase'



export default class PageContent extends Component {
    addMsg = (msg) => {
        const { Name, Email, Subject, Message } = msg
        const messageId = Date.now()
        /*------ Write Data into Firebase DB -------*/
        Database.ref('messages/' + messageId)
            .set({
                Name,
                Email,
                Subject,
                Message
            });
        /*-----Read Data From Firebase DB--------*/
        /*Database.ref('messages/' + 1522055308248).on('value', function (val) {
            console.log(val.val())
        })*/
    }
    openNav = () => {
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
    }
    render() {
        return (
            <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
                <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black w3-round" style={{ width: "auto", right: 0 }} onClick={this.openNav}><i className="fa fa-bars"></i></span>
                <Home />
                <Portfolio />
                <About />
                <Contact addMsg={this.addMsg} />
                {this.props.children}
            </div>
        )
    }
}