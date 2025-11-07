import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquareCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'

const Profile = () => {

  const [sellStatus, setSellStatus] = useState(true)
  const [userBookStatus, setUserBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-gray-900'></div>
      <div style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-150px' }} className='bg-blue-200 p-3'>
        <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      </div>
      <div className='flex px-20 mt-5'>
        <p className='flex justify-center items-center'><span className='text-3xl font-bold '>Soalwin</span>  <FontAwesomeIcon icon={faSquareCheck} className='text-blue-400' /></p><EditProfile />

      </div>
      <p className='md:px-20 my-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis eveniet ullam nesciunt, explicabo vel alias, harum fuga obcaecati deserunt placeat blanditiis facere nemo impedit qui repellat minima sint ea.
        Fuga debitis doloremque ratione possimus, dolorum, officiis dolore explicabo esse commodi natus corrupti ad doloribus incidunt nisi laboriosam eum itaque, voluptas soluta voluptatibus. Necessitatibus maiores quaerat blanditiis molestias voluptas voluptate.</p>

      {/* tabs */}
      <div className='flex justify-center items-center my-5'>
        <p onClick={() => { setSellStatus(true), setUserBookStatus(false), setPurchaseStatus(false) }} className={sellStatus ? 'p-4 text-blue-600 border border-l border-t border-r border-gray-200 rounded cursor-pointer' : userBookStatus ? "p-4 text-black border-gray-200 rounded" : " p-4 text-black border-gray-200 rounded"}>Sell Books</p>
        <p onClick={() => { setSellStatus(false), setUserBookStatus(true), setPurchaseStatus(false) }} className={userBookStatus ? 'p-4 text-blue-600 border border-l border-t border-r border-gray-200 rounded cursor-pointer' : sellStatus ? "p-4 text-black border-gray-200 rounded" : " p-4 text-black border-gray-200 rounded"}>Book Status</p>
        <p onClick={() => { setSellStatus(false), setUserBookStatus(false), setPurchaseStatus(true) }} className={purchaseStatus ? 'p-4 text-blue-600 border border-l border-t border-r border-gray-200 rounded cursor-pointer' : sellStatus ? "p-4 text-black border-gray-200 rounded" : "p-4  text-black border-gray-200 rounded"}>Purchase History</p>
      </div>

      {/* content */}
      {sellStatus &&
        <div className='bg-gray-200 p-10 mt-20'>
          <h1 className='text-center text-3xl font-medium'>Book Details</h1>
          <div className='md:grid grid-cols-2 mt-5 w-full'>
            <div className='px-3'>
              <div className='mb-3'>
                <input type=" text" placeholder='Title' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='Author' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='No of Pages' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='Image URl' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='Price' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='Discount Price' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='Abstract' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>

            </div>
            <div>
              <div className='mb-3'>
                <input type=" text" placeholder='Publisher' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='Language' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='ISBN' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>
              <div className='mb-3'>
                <input type=" text" placeholder='category' className='p-5 bg-white placeholder-gray-300 w-full' />
              </div>

              <div className='mb-3 flex justify-center items-center w-full'>
                <label htmlFor="imageFile">
                  <input type="file" id='imageFile' style={{ display: 'none' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt="" style={{ width: '200px', height: '200px' }} />
                </label>
              </div>
              <div className='flex justify-center items-center'>
                <img src="https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?semt=ais_hybrid&w=740&q=80" alt="" style={{ height: '70px', width: '70px' }} />
                <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3' />
              </div>
            </div>

          </div>
          <div className='flex justify-end gap-2'>
            <button className='border p-2 bg-amber-600 text-black rounded hover:border hover:border-amber-600'>Reset</button>
            <button className='border p-2 bg-green-500 text-black rounded hover:border hover:border-green-500'>Submit</button>
          </div>
        </div>}

      {userBookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          <div className='bg-gray-200 p-4 rounded mb-3'>
            <div className='md:grid grid grid-cols-[3fr_1fr]'>
              <div>
                <h1 className='text-2xl'>Title</h1>
                <h2 className=''>Author</h2>
                <h3 className='text-blue-600'>$ Price</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nostrum reiciendis magni repudiandae autem dignissimos quidem, praesentium qui, maiores cupiditate dolorem pariatur alias ipsum. Laborum id perferendis eos aut mollitia!</p>
                <div className='flex gap-2'>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/pending-red-banner-design-vector-illustration_1004592-4070.jpg" alt="" style={{width:'70px', height:'70px'}}/>
                  </div>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/pending-red-banner-design-vector-illustration_1004592-4070.jpg" alt="" style={{width:'70px', height:'70px'}}/>
                  </div>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/pending-red-banner-design-vector-illustration_1004592-4070.jpg" alt="" style={{width:'70px', height:'70px'}}/>
                  </div>
                </div>

              </div>
              <div>
                <img className='w-full' style={{ height: '300px' }} src="https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className='flex justify-end mt-4 '>

                  <button className='p-2 rounded bg-red-500 text-white'>delete</button>

                </div>
              </div>

            </div>
          </div>

          {/* no books */}
          <div className='flex justify-center items-center flex-col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lSJHEu1OHi4yqG9ztxKBFa0nl72ALvJwrA&s" alt="" style={{width:'200px',height:'200px'}} />
            <p className='text-red-500 text-2xl'>No Books yet!!</p>
          </div>
        </div>}

      {purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
          <div className='bg-gray-200 p-4 rounded mb-3'>
            <div className='md:grid grid grid-cols-[3fr_1fr]'>
              <div>
                <h1 className='text-2xl'>Title</h1>
                <h2 className=''>Author</h2>
                <h3 className='text-blue-600'>$ Price</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nostrum reiciendis magni repudiandae autem dignissimos quidem, praesentium qui, maiores cupiditate dolorem pariatur alias ipsum. Laborum id perferendis eos aut mollitia!</p>
                <div className='flex gap-2'>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/pending-red-banner-design-vector-illustration_1004592-4070.jpg" alt="" style={{width:'70px', height:'70px'}}/>
                  </div>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/pending-red-banner-design-vector-illustration_1004592-4070.jpg" alt="" style={{width:'70px', height:'70px'}}/>
                  </div>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/pending-red-banner-design-vector-illustration_1004592-4070.jpg" alt="" style={{width:'70px', height:'70px'}}/>
                  </div>
                </div>

              </div>
              <div>
                <img className='w-full' style={{ height: '300px' }} src="https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className='flex justify-end mt-4 '>

                  <button className='p-2 rounded bg-red-500 text-white'>delete</button>

                </div>
              </div>

            </div>
          </div>

          {/* no books */}
          <div className='flex justify-center items-center flex-col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lSJHEu1OHi4yqG9ztxKBFa0nl72ALvJwrA&s" alt="" style={{width:'200px',height:'200px'}} />
            <p className='text-red-500 text-2xl'>No Books yet!!</p>
          </div>
        </div>}

      <Footer />
    </>
  )
}

export default Profile