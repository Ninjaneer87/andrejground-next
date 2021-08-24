import { Container, Divider, List, ListItem, ListItemIcon } from '@material-ui/core';
import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { formatDate } from './../../helpers/utility';
import ThemedTypography from '../../UI/ThemedTypography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: 180
  },
  divider: {
    // backgroundColor: cyan[900],
    backgroundColor: theme.palette.custom.accent,
    // backgroundColor: theme.palette.custom.borderColor,
    boxShadow: '0px 10px 20px #000000be',
    width: '100%'
  },
}))

const StickyInfo = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' disableGutters>
      <div className={classes.content}>
        <ThemedTypography style={{ marginBottom: 10, fontSize: 17, fontWeight: 300 }}>
          <span className='cyan'>Andrej</span>Ground | Blog
        </ThemedTypography>
        <ThemedTypography style={{ marginBottom: 10 }}>
          {props.title}
        </ThemedTypography>
        <Divider classes={{ root: classes.divider }} />
        <List disablePadding >
          <ListItem style={{ paddingBottom: 0, fontSize: 13 }}>
            <ListItemIcon style={{ minWidth: 32 }}>
              <PersonOutlineIcon fontSize='small' color='secondary' />
            </ListItemIcon>
            <ThemedTypography variant='caption'>{props.author}</ThemedTypography>
          </ListItem>
          <ListItem style={{ paddingBottom: 0, fontSize: 13 }}>
            <ListItemIcon style={{ minWidth: 32 }}>
              <ScheduleIcon fontSize='small' color='secondary' />
            </ListItemIcon>
            <ThemedTypography variant='caption'>{formatDate(props.createdAt)}</ThemedTypography>
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default StickyInfo;