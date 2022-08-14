import * as React from 'react';
import { useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { logoUrl } from "../../constants/main"
import "./Appheader.scss"

export default function Appheader() {
  let navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const currentUrl = window.location.href

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography onClick={() => navigate('/marcedes/vehicles')}
          sx={currentUrl.includes("vehicles") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
            mr: { xs: 1, md: 4 },
            '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
          }}
          variant='h6' gutterBottom>Vehicles</Typography>

        <Typography onClick={() => navigate('/marcedes/sports')}
          sx={currentUrl.includes("sports") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
            mr: { xs: 1, md: 4 },
            '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
          }} variant='h6' gutterBottom>Sports</Typography>

        <Typography onClick={() => navigate('/marcedes/museum')}
          sx={currentUrl.includes("museum") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
            mr: { xs: 1, md: 4 },
            '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
          }}
          variant='h6' gutterBottom>Museum</Typography>
        <Typography onClick={() => navigate('/marcedes/life-style')}
          sx={currentUrl.includes("life-style") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
            mr: { xs: 1, md: 4 },
            '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
          }} variant='h6' gutterBottom>Life Style</Typography>
      </MenuItem>
      <MenuItem>
        <Typography sx={{ mr: { xs: 1, md: 4, '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' } } }} variant='h6' gutterBottom>Life Style</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <img className="header-logo" src={logoUrl} alt="logo" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate('/')}
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Marcedes-Benz
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography onClick={() => navigate('/marcedes/vehicles')}
              sx={currentUrl.includes("vehicles") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
                mr: { xs: 1, md: 4 },
                '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
              }}
              variant='h6' gutterBottom>Vehicles</Typography>

            <Typography onClick={() => navigate('/marcedes/sports')}
              sx={currentUrl.includes("sports") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
                mr: { xs: 1, md: 4 },
                '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
              }} variant='h6' gutterBottom>Sports</Typography>

            <Typography onClick={() => navigate('/marcedes/museum')}
              sx={currentUrl.includes("museum") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
                mr: { xs: 1, md: 4 },
                '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
              }}
              variant='h6' gutterBottom>Museum</Typography>
            <Typography onClick={() => navigate('/marcedes/life-style')}
              sx={currentUrl.includes("life-style") ? { color: '#1976d2', mr: { xs: 1, md: 4 } } : {
                mr: { xs: 1, md: 4 },
                '&:hover': { cursor: 'pointer', color: 'rgb(51, 51, 164)' }
              }} variant='h6' gutterBottom>Life Style</Typography>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
