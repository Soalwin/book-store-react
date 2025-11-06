import { useEffect, useState } from 'react'
import './App.css'
import Header from './users/components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import PagenotFound from './pages/PagenotFound'
import Preloader from './components/Preloader'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import AllBooks from './users/pages/AllBooks'
import Profile from './users/pages/Profile'


function App() {
    const[loading,setLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },4000)
  },[])



  return (
    <>
   
   <Routes>
    <Route path='/' element={loading ? <Home/> : <Preloader/> }/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth register/>}/>
    <Route path='/career' element={<Careers/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/allbooks' element={<AllBooks/>}/>
      <Route path='/profile' element={<Profile/>}/>


    <Route path='*' element={<PagenotFound/>}/>
   </Routes>
   
    </>
  )
}

export default App
