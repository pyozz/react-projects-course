import React from 'react'
import MenuItem from './MenuItem'

function MenuList({ menu }) {
  return (
    <div className="section-center">
      {menu.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default MenuList
