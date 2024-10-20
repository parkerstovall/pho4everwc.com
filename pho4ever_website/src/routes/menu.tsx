import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: MenuComponent,
})

function MenuComponent() {
  return (
    <div className="p-2">
      <h3>Menu</h3>
    </div>
  )
}
