import * as React from 'react'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { APP_PATH, pages } from '../constants/pages'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef()
  return (
    <AppBar position='sticky'>
      <Toolbar className='bg-pho-navy'>
        <Container maxWidth='md' className='flex items-center'>
          <Typography fontSize={{ xs: '1.75rem', sm: '2.125rem' }} variant='h4'>
            Pho-4-Ever
          </Typography>
          <Box
            height={{ xs: '40px', sm: '50px' }}
            sx={{ marginLeft: { xs: '5px', sm: '15px' } }}
            component='img'
            src={`${APP_PATH}images/animatedBowlOfPho.webp`}
          />

          <Stack
            direction={'row'}
            spacing={3}
            sx={{ marginLeft: 'auto', display: { md: 'flex', xs: 'none' } }}
          >
            {pages.map((page) => {
              return (
                <Link key={page.title} href={page.href}>
                  {page.title}
                </Link>
              )
            })}
          </Stack>

          <Box
            ref={ref}
            sx={{
              flexShrink: 1,
              marginLeft: 'auto',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={() => {
                setMenuOpen(true)
              }}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={ref?.current}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={menuOpen}
              onClose={() => {
                setMenuOpen(false)
              }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    setMenuOpen(false)
                  }}
                >
                  <Link href={page.href} style={{ textAlign: 'center' }}>
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
