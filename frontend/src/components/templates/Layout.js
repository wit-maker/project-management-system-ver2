import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from '../organisms/NavigationBar';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
