import React from 'react'
import images from '../imageindex'

export default function Navbar() {
  return (
    <div id='header'>
            <img src={images.logo} alt='page logo'/>
            Home
            Product
            About
            Contact
            <button>
                Login
            </button>
    </div>
  )
}