import BlurIn from '@/components/UI/BlurIn';
import StyledDivider from '@/components/UI/StyledDivider';
import { Container } from '@mui/material';
import React from 'react';
import UiTabs from './UiTabs';

const Ui = () => {

  return (
    <Container
      maxWidth="lg"
      component="section"
      className="flex flex-col items-center justify-center pb-10"
    >
      <StyledDivider />
      <UiTabs />
    </Container>
  );
};

export default Ui;