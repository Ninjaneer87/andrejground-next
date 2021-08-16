import { LinearProgress, withStyles } from '@material-ui/core';
import React from 'react';
import ReactDom from 'react-dom';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 6,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.custom.accent,
    },
    bar: {
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
}))(LinearProgress);

const LoadingBar = () => {
    return ReactDom.createPortal( 
        <div style={{
            position:'fixed', 
            top:'0',
            left:'0',
            right:'0',
            boxSizing: 'border-box',
            zIndex: '1600',
        }}>
            <BorderLinearProgress /> 
        </div>,
        document.getElementById('portal')
    );
};

export default LoadingBar;