import { faLocationDot, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const EditProfile = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>

      <button onClick={handleOpen} className=' p-2 bg-blue-600 text-white rounded'>Edit Profile</button>


      {open &&

        <div id='modal' className='fixed inset-0 flex justify-items-start items-center z-50'>
          <div className=' bg-white flex flex-col items-center p-10 h-full'>

            <div className=' flex justify-end w-full'>
              <button className=' text-2xl font-bold' onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>
            </div>

            <div>
              <img style={{ height: "200px", width: "200px", borderRadius: "50%" }} src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>

            <div>
              <input className=' rounded bg-white w-full p-2 border my-5' placeholder='Name' type="text" />

              <textarea className=' h-40 rounded bg-white border w-full p-2' placeholder='About' name="" id=""></textarea>


              <div className=' flex justify-end items-center'>
                <button className=' bg-green-600 p-2 text-white rounded'>Save</button>
              </div>
            </div>

          </div>
        </div>

      }

    </div>
  )
}

export default EditProfile