import React from 'react'

export default function Skills() {
    const skill = [{ name: "Javascript", level: "90" }, { name: "React", level: "80" }, { name: "HTML", level: "95" }]

    const skillList = skill.map((item) => (
        <React.Fragment key={item.name}>
            <p className="w3-wide">{item.name}</p>
            <div className="w3-light-grey">
                <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:item.level + "%"}}>{item.level}%</div>
            </div>
        </React.Fragment>
    ))
    return (
        <React.Fragment>
            <h2>About</h2>
            <hr className="w3-opacity" />
            <p>I'm a Web Developer from Bangalore, India.
        I enjoy turning complex problems into simple, beautiful and intuitive interface designs. When I'm not coding or pushing pixels, you'll find me in the gym or exploring new places.
    </p>
            <h3 className="w3-padding-16">My Skills</h3>
            {skillList}
            <br />
        </React.Fragment>
    )
}