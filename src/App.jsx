import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack, createTheme } from '@mui/material';
import Header from './components/Header';
import Add from './components/Add';
import { ThemeProvider } from '@emotion/react';

export default function App() {
  const [mode, setMode] = React.useState('dark');

  const darkTheme = createTheme({
    palette: {
      mode
    }
  })
  function toggleTheme() {
    setMode(prevMode => mode === "dark" ? "light" : "dark")
  }
  return (
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent='space-between'>
          <Sidebar toggle={toggleTheme} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}
