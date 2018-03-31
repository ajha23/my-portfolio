import React from 'react'

export default function ClientInfo() {
    const info = [{ value: "Partners", num: 10 },{ value: "Cups of Coffee", num: 245 }, { value: "Meetings", num: 250 }]
    const InfoList = info.map((item) => (
        <div key={item.value} className="w3-section" style={{width:"33.33%", float:"left"}}>
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