import * as React from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { carouselItem } from '../constants/carosel_items'

export default function CarouselSlide(props: carouselItem) {
  return (
    <Paper
      sx={{
        width: '100%',
        height: { xs: '250px', sm: '500px' },
        backgroundImage: `url("${props.image}");`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
      }}
    >
      <Stack
        justifyContent={'center'}
        padding={2}
        spacing={3}
        alignItems={'center'}
      >
        <Typography
          fontWeight={'500'}
          fontSize={{ xs: '3.5rem', sm: '6rem' }}
          className='text-shadow shadow-black text-white text-center'
          variant='h1'
        >
          {props.header}
        </Typography>

        <Typography
          fontSize={{ xs: '1.5rem', sm: '3rem' }}
          className='text-shadow shadow-black text-white text-center'
          variant='h3'
        >
          {props.subHeader}
        </Typography>

        <Typography
          fontSize={{ xs: '1rem', sm: '1.5rem' }}
          className='text-shadow shadow-black text-white italic text-center'
          variant='h5'
        >
          {props.tag}
        </Typography>
      </Stack>
    </Paper>
  )
}
