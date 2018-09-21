import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";

import "./CookieView.css";

class CookieView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true
        };
    
        this.handleClose = this.handleClose.bind(this);
        this.isCookieSet = cookiePolicy => cookiePolicy && cookiePolicy === "true" ? true : false;
        this.cookies = this.props.cookies;
    }

    handleClose(isPolicyAccepted) {
        this.setState({ show: false });
        if (isPolicyAccepted && isPolicyAccepted === true) {
            if (this.cookies) {
                this.cookies.set("policy", isPolicyAccepted, { maxAge: (10 * 365 * 24 * 60 * 60 )});
            }
        }
    }

    render() {
        const cookiePolicy = this.cookies.get('policy');
        const showCookieDiv = !this.isCookieSet(cookiePolicy) && this.state.show;

        return (
            <Modal show={showCookieDiv} onHide={this.handleClose} bsClass="cookie-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Cookie Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The Vantaa Feed website uses cookies to ensure you receive the best experience on our awesome site! 
                    You do not have to accept the cookie to view our service. Visit our 
                    <a href="http://www.vantaa.fi/tietoa_sivustosta"> Privacy Policy</a> to learn more.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.handleClose(true)}>ACCEPT</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

export default CookieView;