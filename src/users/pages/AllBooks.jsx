import React, { use, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AllBooks = () => {
    const [status,setStatus] = useState(false)
  return (
    <>
    <Header/>
    <div className='flex  justify-center items-center flex-col'>
        <h1 className='mt-5 text-3xl font-medium'>Collections</h1>
        <div className='flex my-8 w-full justify-center items-center'>
            <input type="text" placeholder='Search By Title' className='border border-gray-200 placeholder-gray-400 w-1/4 me-2 h-10' />
            <button className='bg-blue-800 text-white py-2 px-3 shadow hover:border hover:border-blue-800 hover:text-blue-700 hover:bg-white h-10'>Search </button>
        </div>
    </div>
    <div className='md:grid grid-cols-[1fr_4fr] md:p-10 p-5'>
        <div>
            <h1 className='text-2xl font-medium'>Filter</h1>
            <span onClick={()=>setStatus(!status)} className='md:hidden'><FontAwesomeIcon icon={faBars} /></span>
           <div className={status ? "md:block" : "md:block justify-center items-center hidden"}>
                <div>
                    <input type="radio"  id='Noval' name='filter'/>
                    <label htmlFor="Noval" className='ms-3'> Noval</label>
                </div>
                <div>
                    <input type="radio"  id='Detective' name='filter'/>
                    <label htmlFor="Detective" className='ms-3'> Detective</label>
                </div>
                <div>
                    <input type="radio"  id='Autobiography' name='filter'/>
                    <label htmlFor="Autobiography" className='ms-3'> AutobioGraphy</label>
                </div>
           </div>
        </div>
        <div>
            <div className='grid grid-cols-4 w-full'>
        <div className='p-3'>
          <img src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <button className='w-full mt-3 px-3 py-2 bg-blue-700 text-white hover:border hover:border-blue-700'>View More</button>
          </div>
        </div>
         <div className='p-3'>
          <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <button className='w-full mt-3 px-3 py-2 bg-blue-700 text-white hover:border hover:border-blue-700'>View More</button>
          </div>
        </div>
         <div className='p-3'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPqOXlyaAUUC_KwT7PKLZAyXjfzMipm3pBQ&s" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <button className='w-full mt-3 px-3 py-2 bg-blue-700 text-white hover:border hover:border-blue-700'>View More</button>
          </div>
        </div>
         <div className='p-3'>
          <img src="https://dryuc24b85zbr.cloudfront.net/tes/resources/6441170/image?width=500&height=500&version=1474643904786" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <button className='w-full mt-3 px-3 py-2 bg-blue-700 text-white hover:border hover:border-blue-700'>View More</button>
          </div>
        </div>
      </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default AllBooks