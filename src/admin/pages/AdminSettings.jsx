import React from 'react'
import AdminHeader from '../component/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../component/AdminSidebar'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminSettings = () => {
  return (
    <>
    <AdminHeader/>
    <div className='grid grid-cols-[1fr_4fr]'>
        <div><AdminSidebar/></div>
        <div>
            
            <h1 className='text-black flex justify-center items-center text-3xl font-bold '>Settings</h1>
            <div className='grid grid-cols-2'>
                <div className='mt-10 ms-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente amet perspiciatis fuga error. Inventore nam alias placeat, assumenda, molestias voluptate exercitationem quae, ut dolores est repudiandae natus sapiente eligendi.
                Eveniet, culpa sequi sapiente animi nostrum illo aut voluptatem impedit blanditiis, molestiae, hic neque iste est quibusdam? Omnis iste deleniti impedit labore ut cum delectus, explicabo quasi ratione reiciendis assumenda.
                Distinctio, qui nobis dolorum officiis nisi consectetur? Corporis voluptates, assumenda repellendus facere harum error fuga ad labore fugiat eveniet, culpa quae molestiae officia doloribus perferendis dolorem est accusamus quibusdam beatae.

                </div>
                <div className='bg-blue-200 ms-10 mt-5 p-7 rounded'>
                    <div className='flex justify-center items-center'><img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80" alt=""  style={{height:'150px', width:'150px'}}/><FontAwesomeIcon icon={faPenToSquare} />
                    
                    </div>
                  <div className='flex flex-col mt-10 gap-2'>
                        <input className='bg-white rounded border ms-2 h-11' type="text" placeholder='Username' />
                        <input className='bg-white rounded border ms-2 h-11' type="text" placeholder='Password' />
                        <input className='bg-white rounded border ms-2 h-11' type="text" placeholder='Confirm Password' />   
                  </div>

                  <div className='flex flex-row mt-10 gap-2'>
                    <button className='w-full p-2 bg-red-700 text-white'>Reset</button>
                    <button className='w-full p-2 bg-green-700 text-white'>Update</button>
                  </div>



                </div>

            </div>


        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default AdminSettings