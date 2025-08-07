import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/footer'

const Courses = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses
