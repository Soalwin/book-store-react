import { faEye, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { viewABookApi } from '../../services/allAPI';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty';

const ViewBooks = () => {

    const [modal,setModal]=useState(false)
    const [viewBookDetails, setViewBookDetails]= useState({})

    const {id} = useParams()
    
    const viewABook = async(id)=>{
        const result = await viewABookApi(id)
        if(result.status == 200){
            setViewBookDetails(result.data)
        }
    }
 console.log(viewBookDetails);

 useEffect(()=>{
    viewABook(id)
 },[])
 
    return (
        <div>

            <div className=' grid grid-cols-[1fr_3fr] py-10 px-10 gap-5'>

                <div>
                    <img className=' w-full' src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>

                <div>

                    <div className=' flex justify-end'>

                        <div>
                            <FontAwesomeIcon icon={faEye} onClick={()=>setModal(true)} />
                        </div>

                    </div>

                    <div className=' flex justify-center items-center flex-col'>
                        <h1 className=' text-3xl font-bold'>Name</h1>
                        <h1 className=' text-2xl font-semibold'>Author</h1>


                    </div>

                    <div className=' grid grid-cols-3 px-5'>

                        <p>Publisher:{viewBookDetails?.publisher}</p>
                        <p>language:{viewBookDetails?.language}</p>
                        <p>no of pages:{viewBookDetails?.noofpages}</p>
                        <p>seller mail:{viewBookDetails?.userMail}</p>
                        <p>real price:{viewBookDetails?.price}</p>
                        <p>ISBN:{viewBookDetails?.isbn}</p>

                    </div>

                    <div className=' mt-10'>
                        <p>Abstract:{viewBookDetails?.abstract}</p>
                    </div>

                    <div className=' mt-5 clear-both flex justify-end'>
                        <div className=' flex gap-2'>
                            <button className=' p-2 bg-red-600 text-white rounded'>Back</button>
                            <button className=' p-2 bg-green-600 text-white rounded'>Buy{viewBookDetails?.dprice}</button>
                        </div>
                    </div>

                </div>

            </div>

            {modal &&
                <div id='cardView' style={{width:"100%",height:"100%"}} className=' p-5 absolute bottom-0 flex justify-center items-end'>
                    
                    <div className=' flex flex-col justify-center w-6/12 bg-white rounded p-2'>
                        <div className=' rounded-t text-white p-2 flex items-center justify-between bg-black'>
                            <h1>Quick photos</h1>
                            <FontAwesomeIcon icon={faX} onClick={()=>setModal(false)} />
    
                        </div>
                        <div className=' h-full w-full grid grid-cols-3 gap-5 bg-white rounded-b border border-black p-5'>
                           {viewBookDetails?.uploadedImg.map((item)=>(
                                 <img className=' h-60' src={{width:'300px', height:'300px'}} alt="" />
                           )) 
                           }
                           
                        </div>
                    </div>

            </div>}

        </div>
    )
}

export default ViewBooks