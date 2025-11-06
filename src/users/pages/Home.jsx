import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <header className='flex justify-center items-center'>
        <div id='main' className='flex justify-center items-center'>
        <div className='md:grid grid-cols-3'>
          
            <div></div>
            <div className='text-white flex justify-center items-center flex-col text-2xl'>
              <h1 className='text-white flex justify-center items-center flex-col'>Wonderful Grits</h1>
              <p>Give your family and friends a book</p>
              <div className='flex mt-4'>
              <input type="text" placeholder='Search' className='p-2 bg-white rounded-xl' /><FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-800' style={{marginTop:'11px',marginLeft:'-31px'}} />
            </div>
            </div>
            
            <div></div>
          
        </div>
        </div>
      </header>

      {/* new ARRIVALS */}
      <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
        <h2>New Arrivals</h2>
        <h4>Explore our latest Collection</h4>
      <div className='grid grid-cols-4 w-full'>
        <div className='p-3'>
          <img src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <p>$price</p>
          </div>
        </div>
         <div className='p-3'>
          <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <p>$price</p>
          </div>
        </div>
         <div className='p-3'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPqOXlyaAUUC_KwT7PKLZAyXjfzMipm3pBQ&s" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <p>$price</p>
          </div>
        </div>
         <div className='p-3'>
          <img src="https://dryuc24b85zbr.cloudfront.net/tes/resources/6441170/image?width=500&height=500&version=1474643904786" alt="" style={{width:'100%', height:'300px'}} />
          <div className='flex justify-center items-center flex-col '>
            <p>Author</p>
            <h3>tite</h3>
            <p>$price</p>
          </div>
        </div>
      </div>


      <div className='flex justify-center items-center my-5'>
<Link to={'/allbooks'}>
          <button className='px-3 py-2 bg-blue-950 text-white hover:border hover:border-blue-900'>Explore More</button>
  
</Link>      </div>
      
      </section>
{/* author */}
      <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
        <div className='md:grid grid-cols-2 w-full'>
        <div className='flex justify-center items-center flex-col'>
          <h1>Feature Author</h1>
          <h4>Captive</h4>
          <p className='mt-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, adipisci voluptates voluptatum facilis quas libero eius voluptatibus debitis. Doloribus perspiciatis eius natus, consequatur tempora alias commodi repellendus optio laudantium deserunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, adipisci voluptates voluptatum facilis quas libero eius voluptatibus debitis. Doloribus perspiciatis eius natus, consequatur tempora alias commodi repellendus optio laudantium deserunt.</p>
        </div>
        <div className='px-10 pt-8'>

          <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/12/31/Photos/Processed/suits-kp8H--621x414@LiveMint.jpg" alt="" className='w-full' />
        </div>
        </div>
      {/* testimonials */}
      <div className='flex justify-center items-center flex-col md:py-10 md:px-40'>
        <h3>TESTIMONIALS</h3>
        <h3>see what others are offering </h3>

        <img src="https://i.redd.it/no-pun-intended-but-harvey-specter-had-great-suits-v0-446ygjeyfpve1.jpg?width=1024&format=pjpg&auto=webp&s=124f83f39220167f0acd5e2f282edc948f8fe6b1" alt=""  style={{width:'150px', height:'150px', borderRadius:'50%'}} className='mt-5'/>
        <h6 className='mt-3'>Alex</h6>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam eius facere tempora libero vel perferendis magni! Ab ipsam possimus assumenda ipsum nisi. Ducimus aspernatur sequi facilis, ut quia iure.</p>
      </div>
      </section>
      <Footer/>
      </div>
  )
}

export default Home