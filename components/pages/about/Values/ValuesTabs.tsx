import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@/components/pages/about/Values/TabPanel";
import BlurIn from "@/components/UI/BlurIn";
import { aboutValues } from "utils/constants";
import { useTheme, useMediaQuery } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function ValuesTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BlurIn className={`${isSmallScreen ? "" : "flex"} flex-grow w-full`}>
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
        {aboutValues.map((val, i) => (
          <Tab
            key={val.title}
            className="text-left items-start"
            classes={{ root : "transition-opacity"}}
            label={val.title}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>

      <div className={`${isSmallScreen ? "" : "px-6"} flex-grow`}>
        {aboutValues.map((val, i) => (
            <TabPanel key={val.title} value={value} index={i}>
              {val.content}
            </TabPanel>
        ))}
      </div>
    </BlurIn>
  );
}
