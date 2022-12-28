import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BlurIn from "@/components/UI/BlurIn";
import { uiItems } from "utils/constants";
import TabPanel from "../about/Values/TabPanel";
import { useMediaQuery, useTheme } from '@mui/material';

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function UiTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <BlurIn className={`${isSmallScreen ? "" : "flex"} flex-grow w-full min-h-[500px]`}>
        <Tabs
          orientation={`${isSmallScreen ? "horizontal" :"vertical"}`}
          className={`${isSmallScreen ? "my-5" : "max-w-[200px] min-w-[200px]"}`}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="values"
          indicatorColor="primary"
          textColor="inherit"
          scrollButtons="auto"
        >
          {uiItems.map(({title}, i) => (
            <Tab
              key={title}
              className="text-left items-start"
              classes={{ root: "transition-opacity capitalize text-base" }}
              label={title}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>

        <div className={`${isSmallScreen ? "" : "px-6"} flex-grow`}>
          {uiItems.map(({component, title}, i) => (
            <TabPanel key={title} value={value} index={i}>
              {component}
            </TabPanel>
          ))}
        </div>
      </BlurIn>
    </>
  );
}
