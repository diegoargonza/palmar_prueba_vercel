'use client';

import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";

const pages = [
  { name: 'Inicio', path: '/' },
  { name: 'Menú', path: '/menu' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#825E44',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        
        {/* 🔥 Toolbar con separación automática */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* 🟢 LOGO + NOMBRE */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <Image 
              src="/img/palmera.png" 
              alt="logo" 
              width={30} 
              height={10}
              style={{ marginRight: 10 }}
            />

            <Typography
              variant="h4"
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              El Palmar
            </Typography>
          </Box>

          {/* 📱 MENÚ MÓVIL */}
         <Box sx={{ display: { xs: 'flex', md: 'none', gap: 2, ml:'auto' } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left', 
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left', 
            }}
          >
            {pages.map((page) => (
              <MenuItem 
                key={page.name} 
                onClick={handleCloseNavMenu}
                component={Link}
                href={page.path}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>

          {/* 💻 MENÚ DESKTOP (DERECHA) */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 2
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.path}
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  '&:hover': {
                    color: '#fcd34d'
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;