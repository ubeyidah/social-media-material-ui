import React from 'react';
import { Box } from '@mui/material';
import Posts from './Posts';


export default function Feed() {

  return (
    <Box flex={4} p={2} sx={{ margin: "10px 20px" }}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  )
}
