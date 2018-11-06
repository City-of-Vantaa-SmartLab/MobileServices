import React from 'react';
import { share } from 'utils/utils';

const CardHOC = (PassedComponent) => {
    class CardParent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                showNotification: false,
                descriptionMaxLinesLimit: false,
            };
        }

        moreTextClickListener = (ref) => {
            let observer = new MutationObserver(() => {
                let moreText = ref.current.getElementsByClassName('LinesEllipsis-ellipsis')[0];
                if (moreText) {
                    moreText.addEventListener('click', () => {
                        this.setState({ descriptionMaxLinesLimit: true });
                    });
                }
                observer.disconnect();
            });
            observer.observe(ref.current, { attributes: false, childList: true, subtree: true });
        };

        handleClick = (title, description) => {
            let { data } = this.props;
            let isCopySuccessful = share({ url: data.page_link, title: title, description: description });

            if (!navigator.share && isCopySuccessful) {
                this.setState({ showNotification: true });
                setTimeout(() => {
                    this.setState({ showNotification: false });
                }, 1200);
            }
        };

        render() {
            return (
                <PassedComponent
                    handleClick={this.handleClick}
                    showNotification={this.state.showNotification}
                    descriptionMaxLinesLimit={this.state.descriptionMaxLinesLimit}
                    moreTextClickListener={this.moreTextClickListener}
                    {...this.props}
                />
            );
        }
    }

    return CardParent;
};

export default CardHOC;
