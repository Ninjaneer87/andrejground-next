import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@/components/pages/about/Values/TabPanel";
import BlurIn from "@/components/UI/BlurIn";
import { aboutValues } from "utils/constants";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ValuesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BlurIn>
      <div className="flex-grow-0 flex w-[800px] max-w-[90vw] h-fit">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="values"
          className="max-w-[200px] min-w-[200px] text-left items-start"
          textColor="inherit"
        >
          {aboutValues.map((val, i) => (
            <Tab
              key={val.title}
              className="text-left items-start"
              label={val.title}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>

        <div className="px-6">
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
