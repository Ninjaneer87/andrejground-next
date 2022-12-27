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

export default function UiComponentsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <BlurIn className="flex-grow flex w-full max-w-[90vw] h-fit justify-center">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="values"
          className="max-w-[200px] min-w-[200px] text-left items-start shadow-3d-card py-5"
          classes={{ scroller: "w-full" }}
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

        <div className="px-6 flex-grow">
          {uiItems.map((item, i) => (
            <UiIFrameItem item={item} key={item.title} value={value} index={i} />
          ))}
        </div>
      </BlurIn>
    </>
  );
}
