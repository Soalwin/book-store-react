import React, { useEffect, useState } from 'react'

const Preloader = () => {


  return (
     <div className='w-full h-screen flex justify-center items-center'>
            <div className='md:grid grid-cols-3'>
                <div></div>
                <div className=''>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/0*b5dmvyf1uHAeNvvm.gif" alt="" />                  
                </div> 
                <div></div>
            </div>  
         </div>
  )
}

export default Preloader