import React, { useEffect, useState } from 'react'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import Footer from '../../components/Footer'
import { approveBooksAPI, getAllAdminBooksAPI, getAllUsersAPI } from '../../services/allAPI'
import { toast } from 'react-toastify'

const AdminBooks = () => {

const [bookDetails,setBookDetails] = useState([])
const [bookListSatus, setbookListStatus] = useState(true)
  const [usersStatus, setUsersStatus] = useState(false)
  const [token,setToken] = useState('')
  const [approveStatus,setApproveStatus] = useState(false)
  const [users,setUsers] = useState([])

  const getAllBookAdmin = async(token)=>{
     const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        const result = await getAllAdminBooksAPI(reqHeader)
        console.log(result.data);
        if(result.status == 200){
          setBookDetails(result.data)
        }
        
  }


  const approveBook = async(data)=>{
     const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await approveBooksAPI(reqHeader,data)
        console.log(result.data);
        if(result.status == 200){
          setApproveStatus(true)
        }else{
          alert('something went wrong')
        }
        
  }

  const getAllUsers = async()=>{
     const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        const result = await getAllUsersAPI(reqHeader)
        console.log(result.data.allUser);
        if(result.status == 200)
          setUsers(result.data.allUser)
        
  }

useEffect(()=>{
if(sessionStorage.getItem("token")){
  const token =  sessionStorage.getItem("token")
  setToken(token)
  getAllBookAdmin(token)
 
}

if(usersStatus == true){
  getAllUsers()
}
},[approveStatus,usersStatus])

  return (
    <>
      <AdminHeader />

      <div className=' grid md:grid-cols-[1fr_4fr]'>

        <div>
          <AdminSidebar />
        </div>
        <div>
          {/* tabs */}
          <div className=' flex justify-center items-center my-5 gap-0'>

            <p onClick={() => { setbookListStatus(true); setUsersStatus(false) }} className={bookListSatus ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : ' p-4 text-black border-b border-gray-200'}> Book List</p>
            <p onClick={() => { setbookListStatus(false); setUsersStatus(true);}} className={usersStatus ? ' p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded-t cursor-pointer' : ' p-4 text-black border-b border-gray-200'}>Users</p>
      

          </div>



          {/* content */}
          {
            bookListSatus &&
            <div>
              <h1 className=' text-2xl text-center'>Book List</h1>
              <div className=' p-3 px-10 sm:px-24 md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3'>
                  
                  { bookDetails.length >0 ? 
                      bookDetails?.map((items)=>(
                          <div className=' p-3 border border-gray-300'>
                            <div className={items?.status == 'sold' ? ' flex flex-col opacity-58':'flex flex-col'}>
                              <img className=' h-80' src={items?.imageurl} alt="" />
                              <h1 className=' mt-2 text-xl text-blue-400'>{items?.author}</h1>
                              <h1 className=' mt-2 text-lg'>{items?.title}</h1>
                              <h1 className=' mt-2 text-amber-600'>${items?.price}</h1>
                              {items?.status == "pending" && 
                              <div className=' mt-3'>
                                <button onClick={()=>approveBook(items)} className=' w-full bg-green-600 text-white p-2'>Approve</button>
                              </div>}
                              {items?.status == "approved" &&
                              <div>
                                <h1 className='text-green-800 flex items-center justify-center'>Approved</h1>
                              </div>
                              }
                            </div>
                          </div>
                      ))
                          :
                          <p>no Books to show...</p>
                          }
  
              </div>
            </div>
          }
          {
            usersStatus &&
            <div>
              <h1 className=' text-2xl text-center'>Users</h1>

              <div className=' grid md:grid-cols-2 lg:grid-cols-3'>

               { users?.length > 0 ?
               users.map((item)=>(
                  <div className=' p-5'>
                    <div className=' bg-gray-300 p-5'>
                        <h4 className=' text-red-500'>ID : {item?._id}</h4>
                        <div className=' flex gap-3 my-3'>
                          <img className=' w-20 rounded-4xl' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" />
                          <div>
                            <h1 className=' text-2xl text-blue-400'>{item?.username}</h1>
                            <p>email:{item?.email}</p>
                          </div>
                        </div>
                    </div>
                </div>
               ))
                
                :
                <h1 className='text-red-500'>No Users.....</h1>}
                
              </div>

            </div>
          }

        </div>

      </div>


      <Footer />
    </>
  )
}

export default AdminBooks