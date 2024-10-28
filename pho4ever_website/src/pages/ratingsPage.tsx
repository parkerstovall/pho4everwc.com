import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ratings } from '../constants/ratings'
import StarIcon from '@mui/icons-material/Star'
import {
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'

export default function Ratings() {
  const isSmall = useMediaQuery('(max-width: 550px)')
  const blockHeight = isSmall ? 350 : 175

  return (
    <Container className='my-10' maxWidth='sm'>
      <Typography variant='h3'>
        4.8/5{' '}
        <Typography variant='caption'>- google reviews (10/27/2024)</Typography>
      </Typography>

      <Paper elevation={4} className='p-4'>
        <Stack direction='row'>
          <StarIcon fontSize={'large'} className='text-yellow-300' />
          <StarIcon fontSize={'large'} className='text-yellow-300' />
          <StarIcon fontSize={'large'} className='text-yellow-300' />
          <StarIcon fontSize={'large'} className='text-yellow-300' />
          <StarIcon fontSize={'large'} className='text-yellow-300' />
        </Stack>

        <Carousel
          animation='slide'
          duration={500}
          interval={5000}
          navButtonsAlwaysInvisible={true}
          className='mt-4'
          height={blockHeight}
        >
          {ratings.map((item, index) => {
            return (
              <Typography key={index} variant='body1'>
                {item}
              </Typography>
            )
          })}
        </Carousel>
      </Paper>
    </Container>
  )
}
