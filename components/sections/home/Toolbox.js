import React from 'react';
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import Heading from "../../UI/Heading";
import { List, ListItem } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

import bgImage from '../../../public/img/bg2.webp';
import toolboxImage from '../../../public/img/skills1.png';
import reactLogo from '../../../public/img/react-logo.webp';
import angularLogo from '../../../public/img/angular-logo.png';
import sassLogo from '../../../public/img/sass-logo.png';
import tsLogo from '../../../public/img/ts-logo.png';

const useStyles = makeStyles(theme => ({
  toolboxRoot: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    overflow: 'hidden',
    zIndex: 1,
    [theme.breakpoints.up(992)]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${bgImage.src}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      [theme.breakpoints.up(992)]: {
        backgroundSize: 'auto',
        transform: 'scale(1.2)',
        backgroundAttachment: 'fixed',
      },
      [theme.breakpoints.up(2000)]: {
        backgroundSize: 'cover',
      },
    },
  },
  gridItem: {
    marginBottom: '1em',
  },
  toolboxItem: {
    maxWidth: 700,
    margin: '0 auto',
    fontWeight: 400,
    fontSize: '1.2rem',
    // padding: '2rem 0',
    borderRadius: '2rem',
    color: '#fff',
    [theme.breakpoints.up(600)]: {
      padding: '2rem 1rem',
      fontSize: '1.8rem',
    },
    '& span': {
      fontWeight: 400,
      fontSize: '1.05rem',
      [theme.breakpoints.up(600)]: {
        fontSize: '1.3rem',
      },
    },
    '& svg': {
      color: '#fff',
    }
  },
  toolboxImageHolder: {
    width: '90vw',
    maxWidth: 400,
    height: '90vw',
    maxHeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: `drop-shadow(30px 10px 4px #0000005e)`,
    // animation: 'rotate 24s linear infinite',
    position: 'relative'
  },
  toolboxImage: {
    // width: '90vw',
    // maxWidth: 400,
    // filter: 'brightness(.8)',
  },
  listItem: {
    margin: '20px 0',
    color: '#fff',
    [theme.breakpoints.up(600)]: {
      paddingLeft: 50,
    },
    display: 'flex',
    gap: '1rem'
  },
  moreTools: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25,
    gap: '24px',
    maxWidth: 500,
    margin: '0px auto',
  },
  mainToolsItem: {
    width: 'fit-content',
    fontSize: '1rem',
    borderRadius: 20,
    backdropFilter: 'blur(10px)',
    borderTop: `1px solid ${theme.palette.custom.accent}`,
    borderBottom: `1px solid ${theme.palette.custom.accent}`,
    boxShadow: `inset 0px 0px 20px #00000099`,
    backgroundColor: '#ffffff10',
    color: '#fff',
  },
  moreToolsItem: {
    width: 'fit-content',
    fontSize: '1rem',
    borderRadius: 12,
    backdropFilter: 'blur(10px)',
    borderTop: `1px solid ${theme.palette.custom.accent}`,
    borderBottom: `1px solid ${theme.palette.custom.accent}`,
    backgroundColor: '#ffffff10',
    color: '#fff',
    boxShadow: `inset 0px 0px 20px #00000099`,
    // padding: '1rem 2rem',
    [theme.breakpoints.up(600)]: {
      padding: '1rem 2rem',
    },
  },
  translateMinusXl: {
    [theme.breakpoints.up(1300)]: {
      transform: 'translateY(-100px)'
    },
  },
  translatePlusXl: {
    [theme.breakpoints.up(1300)]: {
      transform: 'translateY(+100px)'
    },
  },
  toolIcon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
    display: 'block',
  },
  toolLogoContainer: {
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '1rem'
    // borderRadius: 10,
    // overflow: 'hidden'
  },
  toolLogo: {
    width: '100%',
    display: 'block',
  },
  favToolItem: {
    fontSize: '1rem',
    // fontWeight: '200'
  }
}));

const mainTools = [
  {
    label: 'React',
    logo: reactLogo,
  },
  {
    label: 'Angular',
    logo: angularLogo,
  },
  {
    label: 'TypeScript',
    logo: tsLogo,
  },
  {
    label: 'Sass',
    logo: sassLogo,
  },
]
const moreTools = [
  'Next JS',
  'Redux',
  'Redux Saga',
  'Material UI',
  'Angular Material',
  'RxJS',
  'Jest',
  'Express',
  'MongoDB',
]

const Toolbox = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (entry)
      setRefs('toolbox', entry.target)
  }, [entry, setRefs])


  useEffect(() => {
    if (scrollInView)
      setActiveSection('toolbox');
  }, [scrollInView, setActiveSection]);

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.toolboxRoot} ref={scrollRef}>
        <Container maxWidth='xl'>
          <Box width='100%' padding='30px 0' className='blurIn'>
            <Heading text="Toolbox" inverse />
            <Grid container justifyContent='center' spacing={5}>

              <Grid item xs={12} md={6} className={classes.gridItem}>
                <div className={classes.toolboxItem} style={{ maxWidth: 400 }}>
                  {/* <DefaultCard> */}
                    Main tools
                    <Grid container justifyContent='center' spacing={5} style={{marginTop: 20}}>
                      {mainTools.map(tool => 
                        <Grid key={tool.label} item xs={6} >
                          <div className={classes.mainToolsItem} style={{width: '100%', padding: '1rem'}}>
                            <div className={classes.toolLogoContainer}>
                              <Image className={classes.toolLogo} layout='intrinsic' src={tool.logo} alt='icon' />
                            </div>
                            <div className={classes.favToolItem}>
                              {tool.label}
                            </div>
                          </div>
                        </Grid>
                      )}
                    </Grid>
                  {/* </DefaultCard> */}
                </div>
              </Grid>

              {/* <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={classes.toolboxImageHolder} >
                  <Image src={toolboxImage} alt='toolbox' layout='fill' className={classes.toolboxImage} />
                </div>
              </Grid> */}

              <Grid item xs={12} md={6} className={classes.gridItem}>
                <div className={classes.toolboxItem}>
                  Other tools
                  <List className={classes.moreTools}>
                    {moreTools.map(tool =>
                      <ListItem key={tool} className={classes.moreToolsItem}>
                        {tool}
                      </ListItem>)}
                  </List>
                </div>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default React.memo(Toolbox);