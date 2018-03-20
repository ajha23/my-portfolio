import React, { Component } from 'react'
import Image from '../assets/myPhoto.jpg'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="w3-padding-32 w3-content" id="portfolio">
                <h2 className="w3-text-grey">My Portfolio</h2>
                <hr className="w3-opacity" />
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div className="w3-half">
                        <img src={Image} alt="" style={{ width: "100%" }} />

                    </div>
                    <div className="w3-half">
                        <img src={Image} alt="" style={{ width: "100%" }} />

                    </div>
                </div>
            </div>
        )
    }
}