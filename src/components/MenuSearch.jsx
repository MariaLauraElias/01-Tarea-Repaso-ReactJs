import React from 'react'

export const MenuSearch = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-dark" type="submit">
        Search
      </button>
    </form>
  )
}
