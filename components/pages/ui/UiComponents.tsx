import BlurIn from '@/components/UI/BlurIn';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import UiComponentsTabs from './UiComponentsTabs';
import UiComponentsTabsMobile from './UiComponentsTabsMobile';

const UiComponents = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

  return (
    <Container
      maxWidth="lg"
      component="section"
      className="flex flex-col items-center justify-center pb-10"
    >
      {isSmallScreen ? <UiComponentsTabsMobile /> : <UiComponentsTabs />}
      {/* <UiComponentsTabs /> */}
    </Container>
  );
};

export default UiComponents;