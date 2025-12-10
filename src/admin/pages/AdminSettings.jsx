import React, { useEffect, useState } from 'react'
import AdminHeader from '../component/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../component/AdminSidebar'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { adminProfileUpdateAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import { serverURL } from '../../services/serverURL'

const AdminSettings = () => {

  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    profile: ""
  })

  const [preview, setPreview] = useState("")
  const [token, setToken] = useState('')
  const [existingImg, setExistingImg] = useState('')
  const [updateStatus, setUpdateStatus] = useState({})




  console.log(adminDetails);

  const handleFileAdd = (e) => {
    const event = e.target.files[0]
    setAdminDetails({ ...adminDetails, profile: event })
    console.log(adminDetails);

    if (event != "") {
      const url = URL.createObjectURL(event)
      setPreview(url)
    }

  }
  console.log(preview);

  const handleReset = () => {
    setAdminDetails({
      username: "",
      password: "",
      cpassword: "",
      profile: ""
    })
    setPreview("")
  }

  const handleUpdate = async () => {
    const { username, password, cpassword, profile } = adminDetails
    console.log(username, password, cpassword, profile);

    if (!username || !password || !cpassword || !profile) {
      alert("plaese fill all fields")
    } else {

      if (password !== cpassword) {
        alert("password not match..!")
      } else {
        if (preview) {

          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          console.log(reqHeader);
          const reqBody = new FormData()

          for (let key in adminDetails) {

            reqBody.append(key, adminDetails[key])

          }
          const result = await adminProfileUpdateAPI(reqBody, reqHeader)

          console.log(result);

          if (result.status == 200) {
            toast.success('profile updated')
            sessionStorage.setItem('existingUser', JSON.stringify(result.data))
            setUpdateStatus(result.data)

          }else{
            toast.error('something went wrong.')
          }

        } else {
          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          const result = await adminProfileUpdateAPI({ username, password, profile: existingImg }, reqHeader)
          console.log(result);

          if (result.status == 200) {
            toast.success('profile updated')
            sessionStorage.setItem('existingUser', JSON.stringify(result.data))
            setUpdateStatus(result.data)

          }else{
            toast.error('something went wrong.')
          }
        }

      }
    }
  }







useEffect(() => {
  if (sessionStorage.getItem("token")) { }
  const token = sessionStorage.getItem("token")
  setToken(token)

  const user = JSON.parse(sessionStorage.getItem('existingUser'))
  setAdminDetails({ username: user.username, password: user.password, cpassword: user.cpassword })
  setExistingImg(user.profile)
}, [updateStatus])

return (
  <>
    <AdminHeader />
    <div className='grid grid-cols-[1fr_4fr]'>
      <div><AdminSidebar /></div>
      <div>

        <h1 className='text-black flex justify-center items-center text-3xl font-bold '>Settings</h1>
        <div className='grid grid-cols-2'>
          <div className='mt-10 ms-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente amet perspiciatis fuga error. Inventore nam alias placeat, assumenda, molestias voluptate exercitationem quae, ut dolores est repudiandae natus sapiente eligendi.
            Eveniet, culpa sequi sapiente animi nostrum illo aut voluptatem impedit blanditiis, molestiae, hic neque iste est quibusdam? Omnis iste deleniti impedit labore ut cum delectus, explicabo quasi ratione reiciendis assumenda.
            Distinctio, qui nobis dolorum officiis nisi consectetur? Corporis voluptates, assumenda repellendus facere harum error fuga ad labore fugiat eveniet, culpa quae molestiae officia doloribus perferendis dolorem est accusamus quibusdam beatae.

          </div>
          <div className='bg-blue-200 ms-10 mt-5 p-7 rounded'>
            <div className='flex justify-center items-center'>
              <input type="file" id="adminProfileFile" style={{ display: "none" }} onChange={(e) => handleFileAdd(e)} />
              <label htmlFor='adminProfileFile'>


                {existingImg == "" ? <img src={preview ? preview : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80"} alt="" style={{ height: '150px', width: '150px' }} /> :
                  <img src={preview ? preview : `${serverURL}/uploads/${existingImg}`} alt="" style={{ height: '150px', width: '150px' }} />}

              </label><FontAwesomeIcon icon={faPenToSquare} />

            </div>
            <div className='flex flex-col mt-10 gap-2'>
              <input value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} className='bg-white rounded border ms-2 h-11' type="text" placeholder='Username' />
              <input value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} className='bg-white rounded border ms-2 h-11' type="text" placeholder='Password' />
              <input value={adminDetails.cpassword} onChange={(e) => setAdminDetails({ ...adminDetails, cpassword: e.target.value })} className='bg-white rounded border ms-2 h-11' type="text" placeholder='Confirm Password' />
            </div>

            <div className='flex flex-row mt-10 gap-2'>
              <button onClick={() => { handleReset() }} className='w-full p-2 bg-red-700 text-white'>Reset</button>
              <button onClick={() => handleUpdate()} className='w-full p-2 bg-green-700 text-white'>Update</button>
            </div>



          </div>

        </div>


      </div>
    </div>
<ToastContainer/>
    <Footer />
  </>
)
}

export default AdminSettings