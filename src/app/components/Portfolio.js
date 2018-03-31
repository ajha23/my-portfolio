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
            if (item.ClientId === event.target.id) {
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
            <div className="w3-padding-32 w3-content" id="work">
                <h2 className="w3-text-grey">My Work</h2>
                <hr className="w3-opacity" />
                <div className="w3-row-padding" style={{ margin: "0 -16px", fontSize: "18px" }}>
                    <div className="w3-half">
                        <div id='1' onClick={this.modalClick} className="w3-card-2 w3-hover-shadow w3-round" style={{ height: "150px", maxWidth: "100%", cursor:"pointer", margin:"3px"}} >
                            <div id='1' className="w3-display-container w3-text-blue w3-padding-64 w3-center">
                                <b className="w3-xlarge" id='1' >{Data[0].AppName}</b>
                            </div>
                        </div>
                    </div>
                    <div className="w3-half">
                        <div id='ANZ Bank' onClick={this.modalClick} className="w3-card-2 w3-hover-shadow w3-round" style={{ backgroundColor: "#003E63", height: "150px", maxWidth: "100%",cursor:"pointer",margin:"3px" }} >
                            <div id='2' className="w3-display-container w3-text-white w3-padding-64 w3-center">
                                <b className="w3-xlarge" id='2'>{Data[1].AppName}</b>
                            </div>
                        </div>
                    </div>
                    <CustomModal show={this.state.show} toggle={this.toggle} title={modalData.AppName} >
                        <b style={{ fontSize: "18px" }}>Client : {modalData.ClientName}.*</b>
                        <p style={{textAlign:"justify"}}>{modalData.Desc}</p>
                        <small className="text-muted">*Note: We can't display client's name as per NDA.</small>
                    </CustomModal>
                </div>
            </div>
        )
    }
}