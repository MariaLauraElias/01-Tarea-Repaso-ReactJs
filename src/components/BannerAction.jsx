import React from 'react'
import { BannerCallToAction } from './BannerCallToAction'

export const BannerAction = () => {
  return (
    <div>
      <div className='bg-white p-5 text-center'>
        <div style={{fontSize: '80px', fontWeight: 'bold'}}>HEY DEVELOPERS ..!</div>
        <div style={{fontSize: '30px'}}>Conoce los nuevos curso RollingCode!</div>
        <BannerCallToAction />
      </div>
    </div>
  )
}
