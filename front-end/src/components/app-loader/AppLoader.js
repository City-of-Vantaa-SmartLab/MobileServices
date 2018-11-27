import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import styled, { injectGlobal } from 'react-emotion';
import logoIcon from 'assets/images/vantaa-logo.svg';

const CoordinatorBase = posed.div({
    enter: {
        delayChildren: 500,
        staggerChildren: 300,
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
});
const Box = posed.div({
    visible: {
        opacity: 1,
        transition: {
            opacity: { ease: 'easeIn', duration: 500 },
        },
    },
    hidden: { opacity: 0 },
});

const Wrapper = styled(CoordinatorBase)`
    will-change: transform, opacity;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 0;
`;
class AppLoader extends Component {
    state = {
        show: true,
        visible: false,
    };
    componentDidMount() {
        window.setTimeout(() => this.setState({ show: false }), 1500);
        window.setTimeout(() => this.setState({ visible: true }), 500);
    }
    componentDidUpdate() {
        if (!this.state.show)
            injectGlobal`
            body {
                background: inherit;
            }
        `;
    }
    render() {
        return createPortal(
            <PoseGroup>
                {this.state.show && (
                    <Wrapper key="main" {...this.props}>
                        <Box key="1" pose={this.state.visible ? 'visible' : 'hidden'}>
                            <img key="2" width="200" src={logoIcon} alt="Vantaa Logo" />
                        </Box>
                    </Wrapper>
                )}
            </PoseGroup>,
            document.querySelector('#root')
        );
    }
}

export default AppLoader;
