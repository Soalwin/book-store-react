import React from 'react'
import AdminHeader from '../component/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../component/AdminSidebar'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminHome = () => {
  return (
    <>
    <AdminHeader/>
    <div className='grid grid-cols-[1fr_4fr]'>
        <div><AdminSidebar/></div>
        <div className='p-10'>
            <div className='md:grid grid-cols-3'>
                <div className='md:px-10 px-5'>
                    <div className=' p-5 bg-blue-900 flex rounded text-white gap-2'>
                        <FontAwesomeIcon icon={faBook} />
                        <div>
                            <h1 >Total Number of Books</h1>
                            <h1 className='text-3xl'>100+</h1>
                        </div>
                    </div>
                </div>

                <div className='md:px-10 px-5'>
                    <div className='p-5 bg-green-900 flex rounded text-white gap-2'>
                        <FontAwesomeIcon icon={faBook} />
                        <div>
                            <h1 >Total Number of Books</h1>
                            <h1 className='text-3xl'>100+</h1>
                        </div>
                    </div>
                </div>

                <div className='md:px-10 px-5'>
                    <div className='p-5 bg-yellow-500 flex rounded text-white gap-2'>
                        <FontAwesomeIcon icon={faBook} />
                        <div>
                            <h1 >Total Number of Books</h1>
                            <h1 className='text-3xl'>100+</h1>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default AdminHome