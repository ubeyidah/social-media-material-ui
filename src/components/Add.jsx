import { Add as AddIcon } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';

export default function Add() {
  return (
    <>
      <Tooltip title="New post">
        <Fab color='error' sx={{ position: "fixed", bottom: "20px", left: { xs: "calc(50% - 25px)", md: "30px" } }}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  )
}
