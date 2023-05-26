import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import LeftBar from '../../components/left-bar/LeftBar'
import { Outlet } from 'react-router-dom'
import RightBar from '../../components/right-bar/RightBar'
import '../../style.scss'
import { DarkModeContext } from '../../context/dark-mode-context'


const Layout = () => {
  const { darkMode } = useContext(DarkModeContext)
  
  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`} >
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