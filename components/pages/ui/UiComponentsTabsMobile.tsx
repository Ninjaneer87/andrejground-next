import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BlurIn from "@/components/UI/BlurIn";
import { uiItems } from "utils/constants";
import UiIFrameItem from "./UiIFrameItem";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function UiComponentsTabsMobile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <BlurIn className="flex-grow w-full">
        <Tabs
          className="shadow-3d-card my-5"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="values mobile"
          textColor="inherit"
        >
          {uiItems.map((val, i) => (
            <Tab
              key={val.title}
              className="text-left items-start"
              classes={{ root: "transition-opacity" }}
              label={val.title}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>

        <div className="flex-grow">
          {uiItems.map((item, i) => (
            <UiIFrameItem item={item} key={item.title} value={value} index={i} />
          ))}
        </div>
      </BlurIn>
    </>
  );
}
