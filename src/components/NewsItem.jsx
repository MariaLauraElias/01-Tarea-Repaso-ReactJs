import React from 'react'

export const NewsItem = ( {data} ) => {
  return (
    <div className="feature col text-white" >
      <h3 className="fs-2">{data.title}</h3>
      <p>{data.description}</p>
      <a href="#" className="text-warning">
        Call to action
      </a>
    </div>
  )
}
