import React, { Component } from 'react'
import Image from '../assets/myPhoto.jpg'

export default class Portfolio extends Component {
    render() {
        return (
            <div class="w3-padding-32 w3-content" id="portfolio">
                <h2 class="w3-text-grey">My Portfolio</h2>
                <hr class="w3-opacity" />
                <div class="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div class="w3-half">
                        <img src={Image} alt="" style={{ width: "100%" }} />

                    </div>
                    <div class="w3-half">
                        <img src={Image} alt="" style={{ width: "100%" }} />

                    </div>
                </div>
            </div>
        )
    }
}