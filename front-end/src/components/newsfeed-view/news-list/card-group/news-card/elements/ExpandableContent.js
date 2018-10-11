import React, { Component } from 'react';
import styles from './expandable-content.module.scss';

class ExpandableContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMore: false,
        };

        this.desiredHeight = this.props.maxLine * this.props.lineHeight;
    }

    expandText = () => {
        this.setState({ showMore: false });
    };

    divHeight = {
        height: 'calc(' + this.props.maxLine + ' * ' + this.props.lineHeight + 'rem)',
    };

    moreTextHeight = {
        height: this.props.lineHeight + 'rem',
    };

    componentDidMount() {
        console.log(this.target.clientHeight, this.desiredHeight * 10);
        if (this.target.clientHeight > this.desiredHeight * 10) {
            this.setState({ showMore: true });
        }
    }

    render() {
        return (
            <div
                className={`${styles['expandable-div']} ${this.props.className}`}
                style={{ height: this.state.showMore ? `${this.desiredHeight}rem` : 'auto' }}
                ref={(node) => (this.target = node)}
            >
                <b>{this.props.author || ''}</b> {this.props.description}
                <span
                    className={styles['more-text']}
                    onClick={this.props.ellipsisClickable ? this.expandText : undefined}
                    style={{ display: this.state.showMore ? 'inline' : 'none', ...this.moreTextHeight }}
                >
                    {this.props.ellipsis}
                </span>
            </div>
        );
    }
}

export default ExpandableContent;
