import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header , Footer} from "./index"

const Layout = () => {
    // Header and footer are always be in there , where Outlet will change its route
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout