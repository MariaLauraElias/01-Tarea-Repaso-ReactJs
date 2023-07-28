import React from 'react'

export const ItemBar = ( {itemData} ) => {
  const isActive = !itemData.active ? 'disabled':'';
  
  return (
    
    <li className="nav-item ">
      <a className={`nav-link active text-white ${isActive}`} aria-current="page" href={itemData.link}>
        {itemData.name}
      </a>
    </li>
  )
}
