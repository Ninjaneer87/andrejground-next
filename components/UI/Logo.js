import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import Link from 'next/link';
import NavContext from '../../context/navContext';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

import logoImg from '../../public/img/AG.png';

const useStyles = makeStyles(theme => ({
  logoRoot: {
    display: 'flex',
    textAlign: 'center',
    textDecoration: 'none',
    alignItems: 'center',
    padding: '4px',
    borderRadius: 6,
    height: '3.4rem',
    boxSizing: 'border-box',
  },
  logoHolder: {
    width: '3rem',
    height: '3rem',
    display: 'block',
    borderRadius: '100vh',
    overflow: 'hidden',
    boxShadow: theme.palette.custom.button3DShadow,
  },
  logoText: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.custom.textColor,
      marginLeft: 10,
      display: 'block',
    }
  }
}));

const Logo = (props) => {
  const classes = useStyles();
  const navContext = useContext(NavContext)
  const { asPath } = useRouter();

  const logoHandler = e => {
    if(asPath === '/') {
      e.preventDefault();
      document.body.scrollIntoView({ behavior: 'smooth' })
    }
    navContext.setExpanded(false);
  }

  return (
    <ButtonBase style={{ borderRadius: 8,  }} disableRipple>
      <Link href='/' passHref>
        <a className={classes.logoRoot}  onClick={logoHandler}>
          <div className={classes.logoHolder}>
            <Image className={classes.logoImg} src={logoImg} alt='logo' />
          </div>
          {props.header && <Typography className={classes.logoText}>
            <span className='cyan'>Andrej</span>Ground
          </Typography>}
        </a>
      </Link>
    </ButtonBase>
  );
};

export default React.memo(Logo);