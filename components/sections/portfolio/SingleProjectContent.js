import React, { useContext } from 'react';
import { Container, Grid, makeStyles, Box, List, ListItem, TableCell, Table, TableBody, TableRow, Button, Divider } from '@material-ui/core';
import Heading from '../../UI/Heading';
import patternImage2 from '../../../public/img/pattern2.webp';
import ThemedTypography from '../../UI/ThemedTypography';
import DefaultCard from '../../cards/DefaultCard';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import ThemeContext from '../../../context/themeContext';
// import { imagesPath } from '../../../config';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // textAlign: 'center',
    // alignItems: 'flex-start',
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: 50,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    // overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage2.src}')`,
      backgroundPosition: 'center',
      opacity: .35,
      filter: 'drop-shadow(0px 0px 1px #fff)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: -1
    },
  },
  image: {
    backgroundImage: ({ image }) => image && `url('/images/${image}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    height: 600,
    maxHeight: '90vw',
    filter: `drop-shadow(0px 20px 20px #0000004e)`,
  },
  sticky: {
    position: 'sticky',
    top: 100,
  },
  subtitle: {
    color: theme.palette.custom.textColor,
    fontWeight: 400,
    padding: theme.spacing(1),
    borderRadius: 10,
    width: 'fit-content',
    minWidth: 200,
    margin: '0 auto',
    position: 'relative',
    marginBottom: '20px',
    textAlign: 'center',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      maxWidth: '100%',
      height: '2px',
      backgroundColor: theme.palette.custom.accent
    }
  },
  features: {
    color: theme.palette.custom.textColor,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25
  },
  feature: {
    width: 'fit-content',
    fontSize: '1rem',
    margin: '5px',
    borderRadius: 6,
    backgroundColor: '#6f6f6faa',
    color: '#fff',
  },
  tech: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25
  },
  techItem: {
    width: 'fit-content',
    fontSize: '1rem',
    margin: '5px',
    borderRadius: 6,
    border: `1px solid ${theme.palette.custom.accent}`,
    color: theme.palette.custom.textColor,
    // backgroundColor: theme.palette.custom.cardBgColor
  },
  table: {
    maxWidth: 500,
    margin: '0 auto'
  },
  cell: {
    color: theme.palette.custom.textColor,
    border: 'none',
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: '0px 10px 20px #000000be',
    margin: '20px 0',
    width: '100%'
  },
}))
const SingleProjectContent = (props) => {
  const classes = useStyles({ image: props.image });
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={classes.bgOverlay} >
      <Container maxWidth='xl' className={classes.root + ' fadeIn'}>
        <Heading text={props.title} />
        <Grid container alignItems='flex-start' justifyContent='center' spacing={3}>
          <Grid item xs={12} sm={10} md={6} lg={5}  >
            <DefaultCard>
              <ThemedTypography component='h3' variant='h5' className={classes.subtitle}>
                About {props.title}
              </ThemedTypography>
              <ThemedTypography style={{ textAlign: 'justify' }}>
                {props.description}
              </ThemedTypography>
              {props.sideNote && (
                <>
                  <br />
                  <ThemedTypography style={{ opacity: .6 }} component='small' variant='body2'>* {props.sideNote}</ThemedTypography>
                </>
              )}
              <br />
              <br />

              <ThemedTypography component='h3' variant='h5' className={classes.subtitle}>
                Features & functionalities
              </ThemedTypography>
              <List disablePadding className={classes.features}>
                {props.features?.map(feature => (
                  <ListItem key={feature} className={classes.feature}>
                    {feature}
                  </ListItem>
                ))}
              </List>
              <br />
              <br />

              <ThemedTypography component='h3' variant='h5' className={classes.subtitle}>
                Technologies used
              </ThemedTypography>
              <List className={classes.tech}>
                {props.technologies?.map(tech =>
                  <ListItem key={tech} className={classes.techItem}>
                    {tech}
                  </ListItem>)}
              </List>
              <br />
              <br />

              <ThemedTypography component='h3' variant='h5' className={classes.subtitle}>
                And more
              </ThemedTypography>
              <Table className={classes.table} >
                <TableBody>
                  {props.dataSource ? (
                    <TableRow >
                      <TableCell className={classes.cell} style={{ opacity: .6 }} ><strong>Data source:</strong></TableCell>
                      <TableCell className={classes.cell} align="right">
                        <Button
                          component='a'
                          href={props.dataSource}
                          target='_blank'
                          rel="noopener noreferrer"
                          color={`${darkMode ? 'secondary' : 'primary'}`}
                        >
                          <OpenInNewIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : null}
                  <TableRow >
                    <TableCell className={classes.cell} style={{ opacity: .6 }} ><strong>Project type:</strong></TableCell>
                    <TableCell className={classes.cell} align="right">{props.projectType?.toUpperCase()}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell className={classes.cell} style={{ opacity: .6 }} ><strong>Completed on:</strong></TableCell>
                    <TableCell className={classes.cell} align="right">{props.completedAt}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Divider classes={{ root: classes.divider }} />

              <ButtonGroup
                aria-label="outlined primary button group"
                fullWidth
              >
                <Button
                  variant='text'
                  component='a'
                  target='_blank'
                  rel="noopener noreferrer"
                  href={props.siteLink}
                  disabled={!props.siteLink}
                  endIcon={<LinkIcon />}
                  color={`${darkMode ? 'secondary' : 'primary'}`}
                >
                  Live site
                </Button>
                <Button
                  variant='text'
                  component='a'
                  target='_blank'
                  rel="noopener noreferrer"
                  href={props.codeLink}
                  disabled={!props.codeLink}
                  endIcon={<CodeIcon />}
                  color={`${darkMode ? 'secondary' : 'primary'}`}
                >
                  Code {props.codeLink === '' && 'N/A'}
                </Button>
              </ButtonGroup>
            </DefaultCard>
          </Grid>

          <Grid item xs={12} md={6} className={classes.sticky}>
            <div className={classes.image} />
          </Grid>
        </Grid>
        <Box className={classes.socials} display='flex' justifyContent='center' margin='30px 0'>
        </Box>
      </Container>
    </div>
  );
};

export default React.memo(SingleProjectContent);