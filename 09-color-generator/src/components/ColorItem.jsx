import React from 'react'
import { toast } from 'react-toastify'

function ColorItem({ color, index }) {
  const { hex, weight } = color

  const saveToClipboardHandler = () => {
    navigator.clipboard.writeText(`#${hex}`)
    toast.success(`copied #${hex} !`)
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboardHandler}
    >
      <p className="color-value">{weight}%</p>
      <p className="percent-value">#{hex}</p>
    </article>
  )
}

export default ColorItem
