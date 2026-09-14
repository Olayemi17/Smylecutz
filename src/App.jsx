import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router'
import Body from './Pages/Home/Body'
import About from './Pages/About/About'
import Service from './Pages/Services/Service'
import Collection from './Pages/Collections/Collection'
import Tailoring from './Pages/Tailoring/Tailoring'
import Craftmanship from './Pages/Craftsmanship/Craftmanship'
import Footer from './Components/Footer/Footer'
import Book_Appointment from './Pages/Appointment/Book_Appointment'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={ <Body/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Collection' element={<Collection/>}/>
          <Route path='/Tailoring' element={<Tailoring/>}/>
          <Route path='/Craftmanship' element={<Craftmanship/>}/>
          <Route path='/Book_Appointment' element={<Book_Appointment/>}/>
          <Route path='/Contact' element={<Contact/>}/>
       </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
