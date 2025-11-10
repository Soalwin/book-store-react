import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSidebar = () => {

    const[HomeStatus, setHomeStatus] = useState(false)
    const[BookStatus, setBookStatus] = useState(false)
    const[SettingsStatus, setSettingsStatus]= useState(false)

const navigate = useNavigate()

const pageSwap = (data)=>{
    if(data=="home"){
        navigate("/admin-home")
    }
    else if(data=="allbooks"){
        navigate('/admin-books')
    }
    else if (data=="settings"){
        navigate('/admin-settings')
    }else{
        navigate('*')
    }
}

useEffect(()=>{
    if(location.pathname == "/admin-home"){
        setHomeStatus(true)
    }else if (location.pathname == "/admin-books"){
        setBookStatus(true)
    }else if  (location.pathname == "/admin-settings"){
        setSettingsStatus(true)
    }else{
        console.log("no such page");
        
    }
})

  return (
    <>
       <div className='flex justify-center flex-col items-center bg-blue-200 h-full'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="no image" style={{height:'150px',width:"150px"}}/>
    
                <h1 className='mt-5'>UserName</h1>
    
    <div className='my-5'>
                    <div className='mb-3' >
                        <input type="radio" id="home" />
                        <label  htmlFor="home" className='ms-3' readOnly checked={HomeStatus} onClick={()=>pageSwap("home")}><FontAwesomeIcon icon={faHouseUser} className='me-3' />Home</label>
                    </div>
                    <div className='mb-3' >
                        <input type="radio" id="allbooks" />
                        <label htmlFor="allbooks" className='ms-3' readOnly checked={BookStatus} onClick={()=>pageSwap("allbooks")}><FontAwesomeIcon icon={faHouseUser} className='me-3' />All books</label>
                    </div>
                    <div className='mb-3' >
                        <input type="radio" id="settings" />
                        <label htmlFor="settings" className='ms-3' readOnly checked={SettingsStatus } onClick={()=>pageSwap("settings")}><FontAwesomeIcon icon={faHouseUser} className='me-3' />Settings</label>
                    </div>
        
    </div>
            </div>
       </div>
    </>
  )
}

export default AdminSidebar