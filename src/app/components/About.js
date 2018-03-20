import React from 'react'
import Skills from './Skills'
import ClientInfo from './ClientInfo'
import Testimonials from './Testimonials'

export default function About() {
    return (
        <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
            <Skills />
            <ClientInfo />
            <Testimonials />
        </div>
    )
}