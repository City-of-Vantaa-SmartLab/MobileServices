import React, { Component } from "react";
import { withRouter } from 'react-router'
import SvgIcon from "../svg-icon/SvgIcon";
import styles from "./navigation-icon.module.scss"


export class NavigationIcon extends Component {

    render() {

        return (
            <div className={styles["navigation-icon"]}>
                <SvgIcon isActive={this.props.match && this.props.match.isExact ? true : false} name={this.props.iconName} />
                <div>{this.props.iconText}</div>
            </div>
        )
    }
}

export default withRouter(NavigationIcon);