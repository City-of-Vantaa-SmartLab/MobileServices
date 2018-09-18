import React, { Component } from 'react';
import "./CookieView.css";

const isCookieSet = cookiePolicy => cookiePolicy && cookiePolicy === true ? true : false;

class CookieView extends Component {

    render() {
        const cookiePolicy = this.props.cookies.get('policy');

        return (
            <div className="cookie-view" style={{ display: isCookieSet(cookiePolicy) ? 'none' : 'block' }}>
                <div>
                    Please accept the cookies
                </div>
            </div>
        )
    }

}

export default CookieView;