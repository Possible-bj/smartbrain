import React from 'react'
import Tilt from 'react-tilt'
import Rank from '../Rank/Rank'
import './Logo.css'
import TiltIcon from './brain.png'
const Logo = () => {
  return (
    <div className='nt0 flex w-100'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        {/* <div className='w-20'> */}
        <div className="Tilt-inner pa1" >
        <img alt='logo' src={TiltIcon} style={{ paddingTop: '18px' }}/>
       </div>
        {/* </div> */}
      </Tilt>
      <Rank />
    </div>
  )
}

export default Logo