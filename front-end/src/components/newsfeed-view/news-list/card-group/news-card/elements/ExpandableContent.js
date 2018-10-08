import React, { Component } from 'react';
import styles from './expandable-content.module.scss';

class ExpandableContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMore: false
        }

        this.desiredHeight = this.props.maxLine * 1.7;
    }

    expandText = () => {
        this.setState({showMore: false});
    }

    divHeight = {
        height: 'calc(' + this.props.maxLine + ' * 1.7rem'
    }

    componentDidMount() {
        console.log(this.target.clientHeight);
        if (this.target.clientHeight > this.desiredHeight) {
            this.setState({showMore: true});
        }
    }

    render() {
        return (
            <div className={styles['expandable-div']} style={{height: this.state.showMore ? `${this.desiredHeight}rem` : 'auto'}} ref={ node => (this.target = node)}>
                <b>{this.props.author || ''}</b> {this.props.description} <span className={styles['more-text']} onClick={this.expandText} style={{display: this.state.showMore ? 'inline' : 'none'}}>... more</span>
            </div>
        );
    }
}

export default ExpandableContent;