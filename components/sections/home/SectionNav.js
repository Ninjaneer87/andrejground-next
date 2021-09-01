import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ButtonBase, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ClientOnlyPortal from '../../helpers/ClientOnlyPortal';
import ThemeContext from '../../../context/themeContext';

const useStyles = makeStyles(theme => ({
  sectionNavRoot: ({ darkMode }) => {
    return {
      paddingRight: 2,
      minHeight: 150,
      backgroundColor: 'rgba(0, 0, 0, 0.38)',
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '6px 0 0 6px',
      boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.38)`,
      zIndex: 1,
      '&::after': {
        content: '""',
        position: 'absolute',
        border: `1px solid ${darkMode ? theme.palette.custom.accent : 'transparent'} `,
        width: 'var(--width)',
        left: 'var(--left)',
        top: 2,
        height: 'var(--height)',
        backgroundColor: `${darkMode ? 'transparent' : theme.palette.custom.accent} `,
        zIndex: -1,
        borderRadius: '6px',
        transition: `all ${theme.transitions.duration.short}ms ease 0s`,
        transform: 'translateY(var(--top))'
      },
    }
  },
  item: {
    color: '#fff',
    padding: '12px 6px',
    cursor: 'pointer',
    width: '100%',
    borderRadius: '6px 0 0 6px',
    [theme.breakpoints.up(600)]: {
      padding: '16px 6px',
    },
  },
}))
const initialBox = {
  width: 0,
  left: 0,
  top: 0,
  height: 0,
}
const SectionNav = ({ sections, activeSection, activateSection }) => {
  const activeRef = useRef(null);
  const [mounting, setMounting] = useState(true);
  const [box, setBox] = useState(initialBox);
  const { darkMode } = useContext(ThemeContext)
  const classes = useStyles({ darkMode });

  const setBoxToActiveRef = useCallback(() => {
    const newBox = {
      width: activeRef.current?.offsetWidth,
      left: activeRef.current?.offsetLeft,
      top: activeRef.current?.offsetTop,
      height: activeRef.current?.offsetHeight,
    };
    setBox(newBox);
  }, [])

  useEffect(() => {
    if (activeRef.current && mounting) {
      setBoxToActiveRef();
      setMounting(false);
    }
  }, [box, mounting, setBoxToActiveRef]);

  useEffect(() => {
    window.addEventListener("resize", setBoxToActiveRef);
    return () => window.removeEventListener("resize", setBoxToActiveRef)
  }, [setBoxToActiveRef]);

  useEffect(() => {
    setBoxToActiveRef();
  }, [activeSection, setBoxToActiveRef]);


  // const mouseEnterHandler = (e) => {
  //   const newBox = {
  //     width: e.target.offsetWidth,
  //     left: e.target.offsetLeft,
  //     top: e.target.offsetTop,
  //     height: e.target.offsetHeight,
  //   }
  //   setBox(newBox)
  // }

  // const mouseLeaveHandler = () => {
  //   setBoxToActiveRef();
  // }

  return (
    <ClientOnlyPortal>
      <div
        className={`${classes.sectionNavRoot} fadeIn`}
        style={{
          '--width': Math.round(box.width) - 4 + 'px',
          '--left': Math.round(box.left) + 2 + 'px',
          '--top': Math.round(box.top) + 2 + 'px',
          '--height': Math.round(box.height) - 8 + 'px',
        }}
      >
        {sections.map(section =>
          <Tooltip
            key={section.name}
            title={section.name.toUpperCase()}
            arrow
            placement="left"
          >
            <ButtonBase
              ref={section.name === activeSection ? activeRef : null}
              onClick={() => activateSection(section.name)}
              className={classes.item}
            // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler}
            >
              {section.icon}
            </ButtonBase>
          </Tooltip>
        )}
      </div>
    </ClientOnlyPortal>
  );
};

export default React.memo(SectionNav);