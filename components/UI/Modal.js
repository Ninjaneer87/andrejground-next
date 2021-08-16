import React, { useEffect, useState } from 'react';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import classes from './Modal.module.css';
import ee from 'event-emitter';
import { useTheme } from '@material-ui/core';
import ClientOnlyPortal from '../helpers/ClientOnlyPortal';

const emitter = new ee();
export const showModal = (content) => {
    emitter.emit('showmodal', content);
}
export const hideModal = () => {
    emitter.emit('hidemodal');
}

const Modal = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(false);
    // const modalRef = useRef(null);
    const theme = useTheme();

    const hide = () => {
        setShow(false);
        setTimeout(() => {
            setContent(null);
        }, 300);
    };

    useEffect(() => {
        emitter.on('showmodal', (content) => {
            setShow(true);
            setContent(content);
        });

        emitter.on('hidemodal', () => {
            hide();
        });
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (show) {
                if (event.keyCode === 27)
                    hide();
            }
        }

        if (show) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            if (show) {
                document.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = 'unset';
            }
        }
    }, [show]);

    return (
        <ClientOnlyPortal>
            <div>
                <div
                    className={`${classes.Overlay} ${show ? classes.Show : ''}`}
                    onClick={() => hide()}
                />
                <div
                    className={`${classes.Modal} ${show ? classes.Show : ''}`}
                    style={{ backgroundColor: theme.palette.custom.backgroundColor }}
                // ref={modalRef}
                >
                    {content}
                </div>
                <div
                    className={`${classes.CloseButton} ${show ? classes.Show : ''}`}
                    onClick={() => hide()}
                >
                    <CancelOutlinedIcon fontSize="large" />
                </div>
            </div>
        </ClientOnlyPortal>
    );
};

export default React.memo(Modal);