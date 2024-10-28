import { createFileRoute } from '@tanstack/react-router'
import Ratings from '../pages/ratingsPage'

export const Route = createFileRoute('/ratings')({
  component: Ratings,
})
