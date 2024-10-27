import { createFileRoute } from '@tanstack/react-router'
import About from '../pages/aboutPage'

export const Route = createFileRoute('/about')({
  component: About,
})
