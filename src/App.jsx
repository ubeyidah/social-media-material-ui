import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import Header from './components/Header';
import Add from './components/Add';

export default function App() {

  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  )
}
