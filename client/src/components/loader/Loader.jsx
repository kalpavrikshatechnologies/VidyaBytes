import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <div className='h-screen  flex flex-wrap justify-center items-center'>
      <div class="center-body">
        <div class="loader-circle-9">
          Loading
          <span></span>
        </div>
      </div>

    </div>
  )
}

export default Loader
