import React from 'react'
import { nanoid } from 'nanoid'

import ColorItem from './ColorItem'

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => (
        <ColorItem key={nanoid()} color={color} index={index} />
      ))}
    </section>
  )
}

export default ColorList
