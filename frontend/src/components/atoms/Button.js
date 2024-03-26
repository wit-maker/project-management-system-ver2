import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant, color, onClick }) => {
  return (
    <MuiButton variant={variant} color={color} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
