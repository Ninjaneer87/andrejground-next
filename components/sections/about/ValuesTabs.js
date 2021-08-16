import React from 'react';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './../../UI/TabPanel';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    color: theme.palette.custom.textColor,
    display: 'flex',
    width: 800,
    maxWidth: '90vw',
    height: 'fit-content',
    [theme.breakpoints.down(768)]: {
      display: 'none'
    },
  },
  tabs: {
    maxWidth: 200,
    minWidth: 200,
    textAlign: 'left',
    // borderRight: `1px solid ${theme.palette.custom.borderColor}`,
    alignItems: 'flex-start'
  },
  tab: {
    textAlign: 'left',
    alignItems: 'flex-start',
  }
}));

export default function ValuesTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="values"
        className={classes.tabs}
      >
        {props.values.map((val, i) =>
          <Tab
            key={val.title}
            classes={{ wrapper: classes.tab }}
            label={val.title} 
            {...a11yProps(i)}
          />
        )}
      </Tabs>

      {props.values.map((val, i) =>
        <TabPanel
          key={val.title}
          value={value}
          index={i}
        >
          {val.content}
        </TabPanel>
      )}
    </div>
  );
}