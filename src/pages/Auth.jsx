import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ({ register }) => {
  return (
    <div id='loginPage'>

      <div className='md:grid grid-cols-3'>
        <div></div>

        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-3xl text-white m-5 font-bold'>BOOKSTORE</h1>
          <form id='wolf' className='w-full  p-10 flex justify-center items-center flex-col'>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%' }}
              className='flex justify-center '>
              <FontAwesomeIcon icon={faUser} className="text-white fa-2x  " />
            </div>

            {!register ? <h1 className='text-white mt-3 text-3xl'>LOGIN</h1> :
              <h1 className='text-white mt-3 text-3xl'>REGISTER</h1>
            }

            {register && <div className='mb-3 w-full mt-4'>
              <input type="text" placeholder='User Name' className='p-2 rounded bg-white w-full' />
            </div>}

            <div className='mb-3 w-full mt-4'>
              <input type="text" placeholder='email id' className='p-2 rounded bg-white w-full' />
            </div>

            <div className='mb-3 w-full mt-4'>
              <input type="text" placeholder='password' className='p-2 rounded bg-white w-full' />
            </div>

            <div className='mb-5 w-full flex justify-between'>
              <p className='text-amber-400 ' style={{ fontSize: '10px' }}>*Never Share Your Password with others</p>
              {!register && <p className='text-white ' style={{ fontSize: '10px' }}>forget Password</p>}
            </div>

            <div className='mb-2 w-full'>
              {!register ? <button className='bg-green-700 text-white w-full p-3 rounded'>Login</button> :
                <button className='bg-green-700 text-white w-full p-3 rounded'>Register</button>}
            </div>

            <p className='text-white'>..............OR..............</p>
            <p className='mb-5 mt-3 w-full'>
              {!register && <button className='bg-white text-black w-full p-3 rounded'>Sign in with Google</button>}
            </p>

            {!register ? (
              <p className='text-white'>
                Are you a new user? <Link to='/register'>Register</Link>
              </p>
            ) : (
              <p className='text-white'>
                Are you a new user? <Link to='/login'>Login</Link>
              </p>
            )}
          </form>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Auth