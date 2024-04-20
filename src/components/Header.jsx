import { LogoDev, Mail, Notifications, SearchOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'

export default function Header() {

  const MainToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: 'space-between'
  })
  const Search = styled("div")({
    background: "#fff",
    borderRadius: "6px",
    width: "40%",
    padding: "1px 10px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  })

  const Icons = styled(Box)((theme) => ({
    display: 'flex',
    alignItems: "center",
    gap: "18px"
  }));

  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: "8px",
    display: { xs: "block", ms: 'none' }
  })

  const [open, setOpen] = React.useState(false);
  function toggleMenu() {
    setOpen(prevOpen => !prevOpen)
  }
  return (
    <AppBar position='sticky'>
      <MainToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: 'block' } }}>
          WebDev.
        </Typography>
        <LogoDev sx={{ display: { xs: "block", sm: 'none' } }} fontSize="large" />

        <Search>
          <SearchOutlined sx={{ color: "gray", fontSize: "20px" }} />
          <InputBase placeholder='Search...' />
        </Search>

        <Icons sx={{ display: { xs: "none", sm: 'flex' } }}>
          <Badge badgeContent={3} color='error' >
            <Mail />
          </Badge>
          <Badge badgeContent={6} color='error' >
            <Notifications />
          </Badge>
          <Avatar onClick={toggleMenu} src='./src/assets/av.jpg' sx={{ width: "30px", height: "30px", marginLeft: "10px" }} />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: 'none' } }}>
          <Avatar onClick={toggleMenu} src='./src/assets/av.jpg' sx={{ width: "30px", height: "30px", marginLeft: "10px" }} />
          <Typography variant='span'>Node Js</Typography>
        </UserBox>
      </MainToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={toggleMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
