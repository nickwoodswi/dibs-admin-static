import React, { Component } from 'react'
import './HoldDetail.css'

class HoldDetail extends Component {
    render() {
        return(
            <div className="hold-detail">

                <div className="hold-detail-header">
                    <div className="hold-date">{this.props.holdState.hold_date}</div>
                    <div className="event-title-contact">
                        <div className="event-title-status">
                            <div className="title-support">
                                <div className="event-title">{this.props.holdState.contact_act}</div>
                                <div className="event-support">{this.props.holdState.dsupport_title} / {this.props.holdState.opener_title} / {this.props.holdState.opener2_title}</div>
                            </div>
                            <div className="order-status">
                                <div className="hold-order">{this.props.holdState.hold_number}H</div>
                                <div id="challenged" className={this.props.holdState.hold_status}>{this.props.holdState.hold_status}</div>
                            </div>
                        </div>
                        <div className="event-contact">
                            <div className="name-category-organization">
                                <div className="contact-name">{this.props.holdState.hold_firstname} {this.props.holdState.hold_lastname}</div>
                                <div className="contact-category">{this.props.holdState.contact_type}</div>
                                <div className="organization">{this.props.holdState.contact_org}</div>
                            </div>
                            <div className="email-phone-address-org">
                                <div className="email">{this.props.holdState.hold_email}</div>
                                <div className="phone">{this.props.holdState.contact_phone}</div>
                                <div className="address">
                                    <div className="address-1">{this.props.holdState.org_street1}</div>
                                    <div className="address-2">{this.props.holdState.org_street2}</div>
                                    <div className="city-zip">{this.props.holdState.org_city} {this.props.holdState.org_zip}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hold-notes-container">
                    <div className="hold-notes">
                        {this.props.holdState.event_detail}
                    </div>
                </div>
                <div className="status-button-container">
                    <button id="held" className="status-button" onClick={() => this.props.changeStatus('held', this.props.id)}>HOLD</button>
                    <button id="challenged" className="status-button" onClick={() => this.props.changeStatus('challenged', this.props.id)}>CHALLENGE</button>
                    <button id="offered" className="status-button" onClick={() => this.props.changeStatus('offered', this.props.id)}>OFFER</button>
                    <button id="confirmed" className="status-button" onClick={() => this.props.changeStatus('confirmed', this.props.id)}>CONFIRM</button>
                    <button id="released" className="status-button" onClick={() => this.props.changeStatus('released', this.props.id)}>RELEASE</button>
                </div>
                <div className="music-icons-container">
                    <a href={this.props.holdState.spotify}><div id="spotify" className="music-logo"><img src={require('./images/spotify-logo.png')} /></div></a>
                    <a href={this.props.holdState.youtube}><div id="youtube" className="music-logo"><img src={require("./images/youtube-logo.png")} /></div></a>
                    <a href={this.props.holdState.facebook}><div id="facebook" className="music-logo"><img src={require("./images/facebook-logo.png")} /></div></a>
                    <a href={this.props.holdState.bandcamp}><div id="bandcamp" className="music-logo"><img src={require("./images/bandcamp-logo.png")} /></div></a>
                    <a href={this.props.holdState.website}><div id="website" className="music-logo">SITE</div></a>
                </div>
            </div>
        )
    }
}

export default HoldDetail