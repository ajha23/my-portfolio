import React, { Component } from 'react'
import BaseAlert from './Alerts'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
      alert: false
    }
  }

  onchangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.props.addMsg(this.state)
    this.setState({
      alert: true
    })
    this.contactForm.reset()
  }
  onDismiss = () => {
    this.setState({ alert: false });
  }
  render() {

    return (
      <div className="w3-padding-32 w3-content w3-text-grey" id="contact" style={{ marginBottom: "64px" }}>
        <h2>Contact Me</h2>
        <hr className="w3-opacity" />

        <div className="w3-section">
          <p><i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-right"></i> Bangalore, India</p>
          <p><i className="fa fa-phone fa-fw w3-xlarge w3-margin-right"></i> Phone: +91 8287053177</p>
          <p><i className="fa fa-envelope fa-fw w3-xlarge w3-margin-right"> </i> Email: akhilesh.jha.445@gmail.com</p>
        </div>

        <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
        <form ref={input => this.contactForm = input} onSubmit={this.formSubmit}>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" onChange={this.onchangeInput} /></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" onChange={this.onchangeInput} /></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject" onChange={this.onchangeInput} /></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message" onChange={this.onchangeInput} /></p>
          <p>
            <button className="w3-button w3-light-grey w3-padding-large" type="submit" >
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </p>
          <BaseAlert color="success" isOpen={this.state.alert} toggle={this.onDismiss}>
            Thanks {this.state.Name} for your interest !!!
          </BaseAlert>
        </form>
      </div>
    )
  }
}