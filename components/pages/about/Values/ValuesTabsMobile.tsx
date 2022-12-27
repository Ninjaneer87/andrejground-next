import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@/components/pages/about/Values/TabPanel";
import BlurIn from "@/components/UI/BlurIn";
import { aboutValues } from "utils/constants";

function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ValuesTabsMobile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BlurIn width="100%">
      <div className="flex-grow w-full">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="values mobile"
          textColor="inherit"
        >
          {aboutValues.map((val, i) => (
            <Tab
              classes={{ root: "transition-opacity" }}
              key={val.title}
              label={val.title}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>

        <div className="py-6">
          {aboutValues.map((val, i) => (
            <TabPanel key={val.title} value={value} index={i}>
              {val.content}
            </TabPanel>
          ))}
        </div>
      </div>
    </BlurIn>
  );
}
