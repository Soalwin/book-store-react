import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty'
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [status, setStatus] = useState(false)
  const [dropDownStatus, setDropDownStatus] = useState(false)
  return (
    <>
      <div className='md:grid grid-cols-3'>
        <div className='flex items-center'>
          <img src="https://i.pinimg.com/474x/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg" alt="" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className='flex justify-center items-center '>
          <h1 className='text-2xl'>BOOKSTORE</h1>
        </div>
        <div className='md:flex justify-end items-center hidden gap-3 '>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <Link to={'/login'}>
            <button className='border border-black rounded px-3 py-2 '><FontAwesomeIcon icon={faUser} />login</button>
          </Link>  
          {/* // dropdown */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs  hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setDropDownStatus(!dropDownStatus)}
              >

                <img src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png" alt="UserLogin" style={{ width: "40px", height: '40px', borderRadius: "50%" }} />

              </button>
            </div>

            {dropDownStatus && <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link to={'/profile'}>
                  <p
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <FontAwesomeIcon icon={faAddressCard} className="me-2" />{" "}
                    Profile
                  </p>
                </Link>
                <button
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  <FontAwesomeIcon icon={faPowerOff} className="me-2" />
                  Logout
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>

      <nav className='p-3 w-full bg-gray-900 text-white md:flex justify-center items-center'>
        <div className='flex justify-evenly px-3 md:hidden '>
          <span className='text-2xl ' onClick={() => setStatus(!status)}><FontAwesomeIcon icon={faBars} /></span>
          <Link to={'/login'}><button className='border border-black rounded px-3 py-2 '><FontAwesomeIcon icon={faUser} />login</button></Link>
          {/* // dropdown */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs  hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setDropDownStatus(!dropDownStatus)}
              >

                <img src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png" alt="UserLogin" style={{ width: "40px", height: '40px', borderRadius: "50%" }} />

              </button>
            </div>

            {dropDownStatus && <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link to={'/profile'}>
                  <p
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <FontAwesomeIcon icon={faAddressCard} className="me-2" />{" "}
                    Profile
                  </p>
                </Link>
                <button
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  <FontAwesomeIcon icon={faPowerOff} className="me-2" />
                  Logout
                </button>
              </div>
            </div>}
          </div>

        </div>


        <ul className={`flex flex-col gap-4 md:flex-row md:gap-4 md:bg-transparent left-0 p-4 bg-gray-800 ${status ? "block" : "hidden"} md:flex`} >
          <Link to={'/'}><li>home</li></Link>
          <Link ><li>books</li></Link>
          <Link to={'/career'}><li>careers</li></Link>
          <Link to={'/contact'}><li>contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header