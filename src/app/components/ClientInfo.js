import React from 'react'

export default function ClientInfo() {
    const info = [{ value: "Partners", num: 14 }, { value: "Projects Done", num: 55 }, { value: "Happy Clients", num: 45 }, { value: "Meetings", num: 105 }]
    const InfoList = info.map((item) => (
        <div key={item.value} className="w3-quarter w3-section">
            <span className="w3-xlarge">{item.num}+</span><br />
            {item.value}
        </div>
    ))
    return (
        <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
            {InfoList}
        </div>
    )
}