import React from 'react'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import Footer from '../../components/Footer'

const AdminBooks = () => {
  return (
    <>
    <AdminHeader/>
    <div className='grid grid-cols-[1fr_4fr]'>
        <div><AdminSidebar/></div>
        <div>book</div>
    </div>
    
    <Footer/>
    </>
  )
}

export default AdminBooks