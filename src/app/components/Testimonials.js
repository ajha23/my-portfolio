import React from 'react'
import Image from '../assets/myPhoto.jpg'

export default function Testimonials() {

    return (
        <React.Fragment>
            <h3 class="w3-padding-24">My Reputation</h3>
            <img src={Image} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
            <p><span class="w3-large w3-text-black w3-margin-right">Chandler Bing.</span> Web Designer.</p>
            <p>Akhilesh is just awesome. I am so happy to have met him!</p><br />

            <img src={Image} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
            <p><span class="w3-large w3-text-black w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
            <p>Akhilesh saved us from a web disaster.</p><br />
        </React.Fragment>
    )
}