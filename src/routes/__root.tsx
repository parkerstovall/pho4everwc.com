import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import NotFound from '../pages/NotFound'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  )
}
