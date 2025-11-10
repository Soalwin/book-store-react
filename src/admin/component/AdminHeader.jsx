import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AdminHeader = () => {
  return (
    <>
    <div className='flex justify-between px-20 p-3'>
        <div className='flex items-center'>
            <img src="https://i.pinimg.com/474x/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg" alt="" style={{width:'50px',height:'50px'}} />
            <h1 className='font-bold text-2xl'>BookStore</h1>
        </div> 

        <button className='px-4 py-2 border border-black rounded hover:border-red-500'><FontAwesomeIcon icon={faPowerOff} /> Logout</button>
    </div>


    <marquee className="p-3 bg-gray-900 text-white" direction="left"> Welcome admin you are all set to manage and monitor the system. Lets get to work!</marquee>

    </>
  )
}

export default AdminHeader