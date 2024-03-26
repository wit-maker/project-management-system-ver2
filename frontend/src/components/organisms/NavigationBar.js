import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Project Management System
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => navigate('/tasks')}>
          Tasks
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
