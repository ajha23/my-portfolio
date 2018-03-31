import React from 'react'
import Resume from '../assets/MyResume.doc'
import Image from '../assets/myPhoto.jpg'


export default function Home() {
    return (
        <div className="w3-container w3-center" style={{ padding: "128px 16px" }} id="home">
            <h1 className="w3-jumbo"><b>Akhilesh Jha</b></h1>
            <p>Web Developer</p>
            <img src={Image} alt="" className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} />
            <img src={Image} alt="" className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" />
            <a href={Resume} download>
                <button className="w3-button w3-light-grey w3-padding-large w3-margin-top w3-round">
                    <i className="fa fa-download"></i> Download Resume
                        </button>
            </a>
        </div>
    )
}