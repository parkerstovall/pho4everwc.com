import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import { carouselItems } from '../constants/carosel_items'
import CarouselSlide from '../components/carouselSlide'
import { useMediaQuery } from '@mui/material'

export default function Home() {
  const isSmall = useMediaQuery('(max-width: 600px)')
  const blockHeight = isSmall ? 250 : 500

  return (
    <>
      <Carousel height={blockHeight} indicators={false}>
        {carouselItems.map((item, index) => {
          return <CarouselSlide key={index} {...item} />
        })}
      </Carousel>

      <iframe
        width='100%'
        height={blockHeight}
        id='gmap_canvas'
        src='https://maps.google.com/maps?q=701%20S%20madison%20st%20webb%20city&t=&z=15&ie=UTF8&iwloc=&output=embed'
      ></iframe>
    </>
  )
}
