import React from 'react'
import images from '../imageindex'

export default function Navbar() {
  return (
    <div id='header' class='sticky flex flex-row items-center h-24 w-fit transition-all duration-500
        md:mt-4 md:h-16 md:w-[600px] mx-auto 
        lg:w-[1000px]'>
      <img src={images.logo} alt='page logo' class='mr-12 w-40 
          md:ml-0 md:w-48'/>
      <section class='hidden font-bold text-center
          md:basis-1/3 md:grid md:grid-cols-2 md:mx-auto
          lg:basis-[40%] lg:grid-cols-4 '>
        <p>Home</p>
        <p>Product</p>
        <p>About</p>
        <p>Contact</p>
      </section>
      <section class="w-40 flex flex-row 
          md:block md:w-32 md:ml-auto">
        <button class="border rounded-sm h-12 basis-2/3 min-w-32 font-bold 
            md:w-32">
            Login
        </button>
        <button class="basis-1/3 pl-3 
            md:hidden">
          <svg version="1.1" 
            baseProfile="full"
            width="44" height="26.5"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="4" fill="white" />
            <rect x="11" y="10" width="33" height="4" fill="white" />
            <rect x="22" y="20" width="22" height="4" fill="white" />
          </svg>
        </button>
      </section>
    </div>
  )
}