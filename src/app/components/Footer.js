import React from 'react'

export default function Footer() {
    return (
        <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style={{ margin: "-24px" }}>
            <a href="https://github.com/ajha23" target="_blank" rel="noopener noreferrer" style={{color:"black"}}><i className="fa fa-github w3-hover-opacity" ></i></a>&nbsp;
            <a href="https://www.linkedin.com/in/akhilesh-jha" target="_blank" rel="noopener noreferrer"  style={{color:"black"}}><i className="fa fa-linkedin w3-hover-opacity"></i></a>
            <p className="w3-medium">Handcrafted by Me.</p>
        </footer>
    )
}