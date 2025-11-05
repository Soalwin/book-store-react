import React from 'react'
import { Link } from 'react-router-dom'

const PagenotFound = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='md:grid grid-cols-3'>
                <div></div>
                <div className=''>
                    <img src="https://cdn.svgator.com/images/2024/04/walking-investigator-animation-in-404-error-page.gif" alt="" />
                    <p>oh NO!</p>
                    <h1 className='md:text-5xl text-2xl'>Look like you are lost!</h1>
                    <h5>THE PAGE  YOU ARE LOOKING FOR IS NOT AVAILABLE</h5>
                    <Link to={'/'}> <button className='mt-4 px-4 py-3 bg-blue-800 text-white'>Back Home</button></Link>
                </div> 
                <div></div>
            </div>  
         </div>
    )
}

export default PagenotFound