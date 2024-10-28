import * as React from 'react'

import { Box, Container, Stack, Typography } from '@mui/material'
import {
  appetizers,
  beverages,
  extras,
  pho,
  rice,
  specials,
} from '../constants/menu_items'
import MenuItem from '../components/menuItem'

export default function Menu() {
  return (
    <Container maxWidth='sm' className='my-6'>
      <Beverages />
      <Appetizers />
      <Specials />
      <Pho />
      <Rice />
      <Extras />
    </Container>
  )
}

function Beverages() {
  return (
    <>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{ marginTop: '48px', marginBottom: '32px' }}
        className='w-100 text-gray-800 text-center underline'
      >
        BEVERAGES
      </Typography>

      {beverages.map((bvg) => {
        return <MenuItem key={bvg.name} {...bvg} />
      })}
    </>
  )
}

function Appetizers() {
  return (
    <>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{ marginTop: '48px', marginBottom: '32px' }}
        className='w-100 text-gray-800 text-center underline'
      >
        APPETIZERS
      </Typography>

      {appetizers.map((app) => {
        return <MenuItem key={app.name} {...app} />
      })}
    </>
  )
}

function Specials() {
  return (
    <>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{ marginTop: '48px', marginBottom: '32px' }}
        className='w-100 text-gray-800 text-center underline'
      >
        SPECIALS
      </Typography>

      {specials.map((spc) => {
        return <MenuItem key={spc.name} {...spc} />
      })}
    </>
  )
}

function Pho() {
  return (
    <>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{ marginTop: '48px' }}
        className='w-100 text-gray-800 text-center underline'
      >
        PHỞ
      </Typography>

      <Typography
        className='text-gray-800'
        sx={{ marginBottom: '32px' }}
        variant='body2'
      >
        Traditional Vietnamese soup consisting of rice noodles in a delicate
        broth seasoned with star anise, cinnamon, cilantro, black pepper, and
        onions. All soups are topped with onions, chives, and cilantro.{' '}
      </Typography>

      <Stack direction={'row'}>
        <Typography
          fontWeight='bold'
          textAlign={'center'}
          className='flex-1 text-gray-800'
          variant='body1'
        >
          Small
        </Typography>
        <Typography
          fontWeight='bold'
          textAlign={'center'}
          className='flex-1 text-gray-800'
          variant='body1'
        >
          Medium
        </Typography>
        <Typography
          fontWeight='bold'
          textAlign={'center'}
          className='flex-1 text-gray-800'
          variant='body1'
        >
          Large
        </Typography>
      </Stack>

      <Box
        component={'div'}
        className='my-2 bg-slate-300'
        sx={{ width: '100%', height: '5px', borderRadius: '15px' }}
      />

      <Stack direction={'row'}>
        <Typography
          fontWeight='bold'
          textAlign={'center'}
          className='flex-1 text-gray-800'
          variant='body1'
        >
          $7.99
        </Typography>
        <Typography
          fontWeight='bold'
          textAlign={'center'}
          className='flex-1 text-gray-800'
          variant='body1'
        >
          $8.99
        </Typography>
        <Typography
          fontWeight='bold'
          textAlign={'center'}
          className='flex-1 text-gray-800'
          variant='body1'
        >
          $9.99
        </Typography>
      </Stack>

      {pho.map((pho) => {
        return <MenuItem key={pho.name} {...pho} />
      })}
    </>
  )
}

function Rice() {
  return (
    <>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{ marginTop: '48px', marginBottom: '32px' }}
        className='w-100 text-gray-800 text-center underline'
      >
        RICE
      </Typography>

      {rice.map((rice) => {
        return <MenuItem key={rice.name} {...rice} />
      })}
    </>
  )
}

function Extras() {
  return (
    <>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{ marginTop: '48px', marginBottom: '32px' }}
        className='w-100 text-gray-800 text-center underline'
      >
        EXTRAS AND ADD-ONS
      </Typography>

      {extras.map((ext) => {
        return <MenuItem key={ext.name} {...ext} />
      })}
    </>
  )
}
