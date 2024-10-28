import * as React from 'react'
import { Container, Link, Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <footer className='bg-pho-navy text-white mt-4 pt-4 pb-10 sticky top-full'>
      <Container maxWidth='md'>
        <Stack
          gap={2}
          alignItems='center'
          justifyContent={'space-between'}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        >
          <ContactUs />
          <BusinessHours />
          <SocialMedia />
        </Stack>
      </Container>
    </footer>
  )
}

function ContactUs() {
  return (
    <Stack sx={{ width: { md: '25%', xs: '100%' } }}>
      <Typography sx={{ textDecoration: 'underline' }} variant='h6'>
        Contact Us
      </Typography>
      <Typography variant='body1'>
        <b>Address:</b> 701 S Madison Street, Webb City, MO 64870
      </Typography>

      <Typography variant='body1'>
        <b>Phone:</b>{' '}
        <Link
          sx={{
            color: 'white',
            textDecorationColor: 'white',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
          href='tel:4177170165'
        >
          (417)-717-0165
        </Link>
      </Typography>
    </Stack>
  )
}

function BusinessHours() {
  return (
    <Stack sx={{ width: { md: '25%', xs: '100%' } }}>
      <Typography sx={{ textDecoration: 'underline' }} variant='h6'>
        Business Hours
      </Typography>
      <Typography variant='body1'>
        <b>Monday-Saturday:</b> 11 a.m. - 8 p.m.
      </Typography>

      <Typography variant='body1'>
        <b>Sunday:</b> 11 a.m. - 5 p.m.
      </Typography>
    </Stack>
  )
}

function SocialMedia() {
  const linkStyle = {
    color: 'white',
    textDecorationColor: 'white',
    textDecoration: 'none',
    '&:hover': { textDecoration: 'underline' },
  }

  return (
    <Stack sx={{ width: { md: '25%', xs: '100%' } }}>
      <Typography sx={{ textDecoration: 'underline' }} variant='h6'>
        Social Media
      </Typography>
      <Typography variant='body1'>
        <Link sx={linkStyle} href='https://www.facebook.com/Pho4EverWC/'>
          FaceBook
        </Link>
      </Typography>
      <Typography variant='body1'>
        <Link sx={linkStyle} href='https://www.instagram.com/pho4everwc/?hl=en'>
          Instagram
        </Link>
      </Typography>
      <Typography variant='body1'>
        <Link
          sx={linkStyle}
          href='https://www.yelp.com/biz/pho-4-ever-webb-city'
        >
          Yelp
        </Link>
      </Typography>
    </Stack>
  )
}
