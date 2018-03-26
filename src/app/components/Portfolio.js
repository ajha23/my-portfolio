import React, { Component } from 'react'
import CustomModal from './Modal'
import Data from './PortfolioData'


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            modalData: {}
        };

    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        });
    }

    modalClick = (event) => {
       return Data.map((item) => {
            if (item.ClientName === event.target.id) {
                this.setState({
                    modalData: item,
                    show: !this.state.show
                })
            }
        })
    }

    render() {
        const modalData = this.state.modalData
        return (
            <div className="w3-padding-32 w3-content" id="portfolio">
                <h2 className="w3-text-grey">My Portfolio</h2>
                <hr className="w3-opacity" />
                <div className="w3-row-padding" style={{ margin: "0 -16px", fontSize: "18px" }}>
                    <div className="w3-half">
                        <div id='Chevron' onClick={this.modalClick} className="w3-card-2 w3-hover-shadow w3-padding-32 w3-center" style={{ height: "200px", maxWidth: "100%", margin: "2px" }} >
                            <div id='Chevron' className="w3-container">
                                <img id='Chevron' src={Data[0].Image} alt="ANZ Bank" width="80px" /><br />
                                <b id='Chevron' >{Data[0].AppName}</b>
                            </div>
                        </div>
                    </div>
                    <div className="w3-half">
                        <div id='ANZ Bank' onClick={this.modalClick} className="w3-card-2 w3-hover-shadow w3-padding-32 w3-center" style={{ backgroundColor: "#003E63", height: "200px", maxWidth: "100%", margin: "2px" }} >
                            <div id='ANZ Bank' className="w3-container w3-text-white">
                                <img id='ANZ Bank'  src={Data[1].Image} alt="ANZ Bank" width="200px" /><br />
                                <b id='ANZ Bank'>{Data[1].AppName}</b>
                            </div>
                        </div>
                    </div>
                    <CustomModal show={this.state.show} toggle={this.toggle} title={modalData.ClientName} >
                        <b style={{ fontSize: "18px" }}>{modalData.AppName} :</b>
                        <p style={{textAlign:"justify"}}>{modalData.Desc}</p>
                    </CustomModal>
                </div>
            </div>
        )
    }
}