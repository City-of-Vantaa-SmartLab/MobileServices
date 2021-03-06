import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import styles from "./cookie-view.module.scss";

class CookieView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true
        };
    
        this.isCookieSet = cookiePolicy => cookiePolicy && cookiePolicy === "true" ? true : false;
        this.cookies = this.props.cookies;
    }

    handleClose = (isPolicyAccepted) => {
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
            <Modal show={showCookieDiv} onHide={this.handleClose} dialogClassName={styles["cookie-modal"]} backdropClassName={styles["cookie-modal-backdrop"]}>
                <Modal.Header closeButton>
                    <Modal.Title componentClass="h2">Cookie Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    The Vantaa Feed website uses cookies to ensure you receive the best experience on our awesome site! 
                    You do not have to accept the cookie to view our service. Visit our 
                    <a href="http://www.vantaa.fi/tietoa_sivustosta"> Privacy Policy</a> to learn more.
                </Modal.Body>
                <Modal.Footer>
                    <div className={styles["footer-container"]}>
                        <div className={styles["reject-text"]}>
                            <a onClick={this.handleClose}>REJECT</a>
                        </div>
                        <Button onClick={() => this.handleClose(true)}>ACCEPT</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }

}

export default CookieView;