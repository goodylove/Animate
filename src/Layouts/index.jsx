import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../navigation/Footer'

export const  LayoutWrapper =(props)=> {
  return (
      <div>
          <NavBar />
          {props.children}
          <Footer/>
    </div>
  )
}
