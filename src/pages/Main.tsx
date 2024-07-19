import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div>
        <Link to={'webCam'}>Webcam</Link>
      </div>
      <div>
        <Link to={'sound'}>Sound</Link>
      </div>
      <div>
        <Link to={'MicroPhone'}>MicroPhone</Link>
      </div>
    </>
  )
}

export default Main
