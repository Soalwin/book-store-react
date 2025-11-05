import React from 'react'
import Header from '../users/components/Header'
import Footer from '../components/Footer'
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <div className=' my-5 flex flex-col gap-4 justify-center items-center px-4 sm:px-10 md:px-20 lg:px-40'>
                    <h2 className=' text-2xl font-semibold'>Contact</h2>
                    <p className=' text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, provident esse suscipit magnam consequatur quisquam nihil quia harum vero obcaecati ratione molestias odit molestiae maxime iusto vitae! Voluptas, voluptate nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, accusamus veniam omnis sequi corrupti ut ipsa esse porro earum dignissimos modi nihil illo ducimus labore minus, minima dolor dolores delectus!</p>
                </div>

                <div className=' py-5 grid grid-cols-1 md:grid-cols-3'>
                    <div className=' flex justify-center items-center'>
                        <div style={{width:"50px",height:"50px",borderRadius:"50px"}} className=' my-3 md:my-0 bg-gray-400 flex items-center justify-center me-2 text-2xl'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <p>123 Main Street,Apt 4B <br />Anytown CA</p>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <div style={{width:"50px",height:"50px",borderRadius:"50px"}} className='my-3 md:my-0 bg-gray-400 flex items-center justify-center me-2 text-2xl'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <p className=' pe-10 md:pe-0'>+91 9987643245</p>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <div style={{width:"50px",height:"50px",borderRadius:"50px"}} className='my-3 md:my-0 bg-gray-400 flex items-center justify-center me-2 text-2xl'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <p>Bookstore@gmail.com</p>
                    </div>
                </div>

                <div className=' px-5 md:px-20 py-5'>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                        <div className=' mb-10 md:mb-0 md:p-4'>
                            <div className=' bg-gray-200 border p-5 rounded-lg flex flex-col gap-5 justify-center items-center'>
                                <h1 className=' text-lg font-bold'>Send Me Message</h1>
                                <input placeholder='Name' type="text" className=' bg-white px-3 py-2 border rounded-lg w-full' />
                                <input placeholder='Email' type="text" className=' bg-white px-3 py-2 border rounded-lg w-full' />
                                <textarea placeholder='Message' className=' bg-white px-3 py-2 border rounded-lg w-full' name="" id=""></textarea>
                                <button className=' w-full py-2 rounded-lg bg-blue-950 text-white'>Send<FontAwesomeIcon icon={faPaperPlane} /></button>
                            </div>
                        </div>
                        <div className=' md:p-4'>
                            <iframe className=' w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55783626531!2d76.35068085!3d10.008816000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1762273859314!5m2!1sen!2sin" loading='lazy' referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Contact