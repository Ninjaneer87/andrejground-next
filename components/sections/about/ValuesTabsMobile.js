import React from 'react';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './../../UI/TabPanel';


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: theme.palette.custom.textColor,
    [theme.breakpoints.up(768)]: {
      display: 'none'
    },
  },
  tabs: {
    // borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
  },
}));

export default function ValuesTabsMobile(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        // textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="values mobile"
        className={classes.tabs}
      >
        {props.values.map((val, i) =>
          <Tab
            key={val.title}
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