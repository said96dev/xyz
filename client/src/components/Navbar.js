import React, { useContext, useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { AppContext } from '../context/appContext'
import NavLinks from './NavLinks'
/* import {IoIosNotifications } from "react-icons/io" */
import { IoLogOut } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Navbar() {
  const { toggleSidebar, logoutUser } = useContext(AppContext)
  const [showLogout, setShowLogout] = useState(false)
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div className="nav-links">
          <NavLinks />
        </div>
        <div
          className={
            showLogout ? 'btn-container show-btn-container' : 'btn-container'
          }
        >
          {/* <div onClick={() => {console.log("Notifications")}} className=" divIcon divIcon-Primary">
      <IoIosNotifications />
      </div> */}
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            <FiSettings />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <Link
              to={'/profile'}
              className="dropdown-btn"
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle className="mr-2" /> Profile
            </Link>

            <button onClick={logoutUser} className="dropdown-btn">
              <IoLogOut className="mr-2" />
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
