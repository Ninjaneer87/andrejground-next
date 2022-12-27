import React, { useContext } from "react";
import { IFrameItem } from 'utils/constants';
import TabPanel from '../about/Values/TabPanel';
import ThemeContext, { ThemeContextType } from "context/themeContext";
import  { EmbedOptions } from '@stackblitz/sdk';
import { styled } from "@mui/material";
import useIFrameThemeSync, { ThemeValue } from "hooks/useIFrameThemeSync";

const IFrameContainer = styled('div')({
  boxShadow: "var(--shadow-3d-card)",
  width: "100%",
  flexGrow: 1,
  maxWidth: "999px",
  '& iframe': {
    border: "none",
    maxHeight: '100vh',
    height: 600,
  }
});

const  iFrameConfig: EmbedOptions = {
  view: 'preview',
  showSidebar: false,
  hideNavigation: true,
  hideDevTools: true,
  forceEmbedLayout: true,
  openFile: 'App.tsx',
}

type Props = {
  item: IFrameItem;
  value: number;
  index: number;
}

const UiIFrameItem = ({ item, value, index }: Props) => {
  const { dark } = useContext(ThemeContext) as ThemeContextType;
  const theme: ThemeValue = dark ? "dark" : "light";
  const elementId = String(index);
  const projectId = item.id;
  useIFrameThemeSync(elementId, projectId, iFrameConfig, theme);

  return (
    <TabPanel key={item.title} value={value} index={index}>
      <IFrameContainer>
        <div id={`${index}`} />
      </IFrameContainer>
    </TabPanel>
  );
};

export default UiIFrameItem;