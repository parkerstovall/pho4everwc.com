import * as React from 'react'
import { Container, Link, Typography } from '@mui/material'
import { APP_PATH } from '../constants/pages'

export default function NotFound() {
  return (
    <Container maxWidth='md' className='my-6 text-center'>
      <Typography className='pb-4' variant='h4'>
        Not Found
      </Typography>
      <Typography variant='body1'>
        Looks like the page that you were trying to find doesn&apos;t exist.{' '}
        <Link href={APP_PATH}>Click here</Link> to go to the homepage, or use
        the navigation bar above.
      </Typography>
    </Container>
  )
}
