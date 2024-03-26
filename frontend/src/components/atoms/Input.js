import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default Input;
