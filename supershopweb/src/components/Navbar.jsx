import React, { useState, useEffect } from 'react'
import '../style/Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      if (position > 100) {
        setToggleMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="header" id="top">
      <a href="#" className="logo_shop">
        <div>
          <h1>Super Shop</h1>
        </div>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#top" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#main">Products</a>
          </li>
          <li>
            <a href="#aboutus">About us</a>
          </li>
          <li>
            <a href="#contact_us">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="navbar_smallscreen">
        <h1>Super Shop</h1>
        <div className="navbar_smallscreen_hamburger">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true)
            }}
          />

          {toggleMenu && (
            <div className="navbar_smallscreen_overlay">
              <IoCloseCircleOutline
                fontSize={30}
                className="overlay_close"
                onClick={() => {
                  setToggleMenu(false)
                }}
              />

              <ul
                className="navbar_smallscreen_list_smallscreen"
                onClick={() => {
                  setToggleMenu(false)
                }}
              >
                <li>
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#main">Products</a>
                </li>
                <li>
                  <a href="#aboutus">About us</a>
                </li>
                <li>
                  <a href="#contact_us">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
export default Navbar
