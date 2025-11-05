import React from 'react'
import Header from '../users/components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 500,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 0,
// };

const Careers = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (

        <>
            <Header />
            <div>
                <div className=' my-10 flex flex-col gap-4 justify-center items-center px-4 sm:px-10 md:px-20 lg:px-40'>
                    <h2 className=' text-2xl font-semibold'>Careers</h2>
                    <p className=' text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, provident esse suscipit magnam consequatur quisquam nihil quia harum vero obcaecati ratione molestias odit molestiae maxime iusto vitae! Voluptas, voluptate nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, accusamus veniam omnis sequi corrupti ut ipsa esse porro earum dignissimos modi nihil illo ducimus labore minus, minima dolor dolores delectus!</p>
                </div>

                <div className=' px-2 sm:px-6 md:px-10 lg:px-28'>
                    <h4 className=' font-semibold'>Current Openings</h4>

                    <div className=' flex justify-center items-center my-5'>
                        <input placeholder=' Job Title' className=' rounded-l-md py-1 ps-3 bg-white border' type="text" name="" id="" />
                        <button className=' rounded-r-md border border-green-800 bg-green-800 px-3 py-1 text-white'>Search</button>
                    </div>
                </div>

                <div className=' px-2 sm:px-10 md:px-20 lg:px-56 pb-10 flex flex-col gap-5'>

                    <div className=' border p-8 shadow-2xl rounded'>

                        <div className=' flex justify-between'>
                            <h1 className=' font-bold'>Job Title</h1>
                            <button onClick={handleOpen} className=' bg-blue-700 p-2 rounded-md text-white'>Apply <FontAwesomeIcon className=' ms-1 text-l' icon={faSquareArrowUpRight} /></button>
                        </div>
                        <hr className=' w-10/12 text-gray-500' />
                        <div className=' my-5 flex flex-col gap-2'>
                            <p className=' font-semibold'> <FontAwesomeIcon icon={faLocationDot} /> Location</p>
                            <p><span className=' font-semibold'>Job Type : </span> Senior level</p>
                            <p><span className=' font-semibold'>Salary : </span> 5 LPA</p>
                            <p><span className=' font-semibold'>Qualification :</span> M.Tech</p>
                            <p><span className=' font-semibold'>Experience :</span> 5-7</p>
                            <p><span className=' font-semibold'>Description :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto vitae dolore ex voluptate excepturi deleniti tenetur explicabo libero rem voluptatibus iste autem, consectetur quam eveniet, possimus sit modi. Amet!</p>

                        </div>

                    </div>


                </div>

            </div>


            {open && 
            
            <div id='modal' className='fixed inset-0 flex justify-center items-center z-50'>
                <div className='bg-white border rounded-lg w-11/12 md:w-2/3 lg:w-1/2 shadow-lg'>
                    <div className=' rounded-t-md bg-black text-white px-5 py-3 text-2xl flex justify-between' >
                        <h1>Application Form</h1>
                        <button onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <div className=' p-5'>
                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 mt-5'>
                            <input placeholder='Fullname' className=' ps-2 bg-white border rounded-md py-2' type="text" />
                            <input placeholder='Qualification' className=' ps-2 bg-white border rounded-md py-2' type="text" />
                        </div>
                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 mt-5'>
                            <input placeholder='Email' className=' ps-2 bg-white border rounded-md py-2' type="text" />
                            <input placeholder='Phone' className=' ps-2 bg-white border rounded-md py-2' type="text" />
                        </div>
                        <div className=' mt-5 '>
                            <textarea placeholder='Cover letter' className=' border w-full rounded-md px-2 py-2' name="" id=""></textarea>
                        </div>
                        <div className=' mt-5'>
                            <h1>Resume</h1>
                            <input type="file" name="" className=' border px-2 py-2 rounded-md w-full' id="" />
                        </div>
                    </div>
                    <div className=' mt-5 bg-gray-400 px-3 py-4 flex justify-end gap-3 rounded-b-lg'>
                        <button className=' bg-orange-600 text-white rounded-md p-2'>Reset</button>
                        <button className=' bg-green-500 text-white rounded-md p-2'>Submit</button>
                    </div>
                </div>
            </div>
            
            }

            <Footer />
        </>
    )
}

export default Careers