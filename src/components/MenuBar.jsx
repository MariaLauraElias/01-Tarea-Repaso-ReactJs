import React from 'react'
import { ItemBar } from './ItemBar'

export const MenuBar = ( {dataMenu} ) => {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      {dataMenu.map((item) => (
        <ItemBar key={item.id} itemData={item}/>
      ))}
      
    </ul>
  )
}
