import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages/homePage'

export const Route = createFileRoute('/')({
  component: Home,
})
