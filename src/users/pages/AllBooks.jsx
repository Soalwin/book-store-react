import { useEffect, useState } from "react"
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAllBooksAPI } from "../../services/allAPI"

const AllBooks = () => {
  const [status, setStatus] = useState(false)
  const [allBooks, setAllBooks] = useState([])
  const [token, setToken] = useState("")

  const getAllBooks = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllBooksAPI(reqHeader)
    if (result.status == 200) {
      setAllBooks(result.data)
    }
  }

  console.log(allBooks)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      setToken(tok)
      getAllBooks(tok)
    }
  }, [])

  return (
    <>
      <Header />
      {token ?
                
                <div className=' flex flex-col justify-center items-center'>
                <h1 className=' text-black text-2xl'>Collections</h1>
                <div className=' flex justify-center items-center py-5'>
                    <input placeholder=' Search Book Name' className=' bg-white placeholder-gray-600 p-2 border rounded me-1' type="text" />
                    <button className=' text-white bg-blue-600 p-2 rounded border border-blue-600'>Search</button>
                </div>


                <div className='md:grid grid-cols-[1fr_4fr] md:p-10 p-5'>

                    <div>
                        <div className='flex justify-center items-center'>
                            <h1 className=' text-xl'>Filter</h1>
                            <button onClick={() => setStatus(!status)} className=' md:hidden' ><FontAwesomeIcon className=' text-3xl text-black ms-5' icon={faBars} /></button>
                        </div>

                        <div className={status ? 'md:block' : 'md:block justify-center items-center hidden'}>
                            <div className=' flex flex-col justify-center items-center'>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                                <div className=' mt-3'>
                                    <input type="radio" name="filter" id="literacy" />
                                    <label htmlFor="literacy" className=' ms-3'>Literacy</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-6">

                            {allBooks.length > 0 ?

                                allBooks.map(book => (

                                    <div className="p-3 flex flex-col items-center text-center">
                                        <img
                                            className="w-full max-w-xs rounded-md shadow-md"
                                            src={book.imgUrl}
                                            alt="cover page"
                                        />
                                        <p className=' my-1'>{book?.author}</p>
                                        <p className='my-1'>{book?.title}</p>
                                        <button className=' my-1 border border-blue-900 bg-blue-900 w-full p-2 text-white hover:bg-white hover:text-blue-900'>View More</button>
                                    </div>

                                ))

                                :

                                <p>loading...</p>

                            }

                        </div>

                    </div>


                </div>


            </div>

            :

            <div className=' flex  justify-center flex-col items-center py-10'>


                <img className=' w-40' src="https://cdn-icons-gif.flaticon.com/6569/6569164.gif" alt="" />
                <p>Please <a className=' underline text-blue-600' href='/login'>Login</a> to access Books.</p>

            </div>
            
            }
      <Footer />
    </>
  )
}

export default AllBooks
