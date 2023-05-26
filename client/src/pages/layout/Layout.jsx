import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LeftBar from '../../components/left-bar/LeftBar'
import { Outlet } from 'react-router-dom'
import RightBar from '../../components/right-bar/RightBar'

const Layout = () => {
  return (
    <div >
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default Layout