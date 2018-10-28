import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'utils/utils';
import styles from './header.module.scss';

class DateHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sticky: false };
        this.headerRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.newsfeedHeader) window.addEventListener('NewsFeedContainerScrolling', this.handleScroll);
    }

    componentWillUnmount() {
        if (this.props.newsfeedHeader) window.removeEventListener('NewsFeedContainerScrolling', this.handleScroll);
    }

    handleScroll = () => {
        // if (this.headerRef.current.parentNode.getBoundingClientRect().top < 0) {
        // this.setState({sticky: true});
        // console.log('FIREE');
        // } else {
        // this.setState({sticky: false});
        // }
        this.headerRef.current.style['width'] =
            this.headerRef.current.getBoundingClientRect().top < 50 ? '100%' : 'auto';
    };

    render() {
        let date = this.props.timestamp ? new Date(this.props.timestamp) : new Date();

        return (
            <div
                className={`${styles['date']} ${this.props.newsfeedHeader ? styles['newsfeed-date'] : ''} ${
                    this.state.sticky ? styles['sticky'] : ''
                } `}
                ref={this.headerRef}
            >
                <h4>{formatDate(date, this.props.i18n.locale)}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default connect(mapStateToProps)(DateHeader);
