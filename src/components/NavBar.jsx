import React from 'react'
import { MenuBar } from './MenuBar'
import { MenuSearch } from './MenuSearch'
import Menu from '../data/Menu.json'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <MenuBar dataMenu={Menu}/>
            <MenuSearch />

          </div>
        </div>
      </nav>
  )
}
