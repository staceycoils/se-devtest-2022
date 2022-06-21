import React from 'react'
import images from '../imageindex'

export default function Navbar() {
  return (
    <div id='header' class='sticky flex flex-row items-center h-24 w-fit
        md:mt-4 md:h-16 md:w-[600px] mx-auto lg:w-[1000px] transition-all duration-500'>
      <img src={images.logo} alt='page logo' class='mx-6 w-40 
          md:ml-0 md:w-48'/>
      <section class='hidden font-medium text-center
          md:basis-1/3 md:grid md:grid-cols-2 lg:basis-1/2 lg:grid-cols-4'>
        <p>Home</p>
        <p>Product</p>
        <p>About</p>
        <p>Contact</p>
      </section>
      <section class="w-48 flex flex-row 
          md:grid md:w-32 md:basis-1/4">
        <button class="border rounded-sm h-12 basis-2/3 min-w-32 md:w-1/2 md:ml-auto">
            Login
        </button>
        <button class="basis-1/3 pl-3 md:hidden">
          <svg version="1.1" 
            baseProfile="full"
            width="44" height="26.5"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="5" rx='3' fill="white" />
            <rect x="11" y="10" width="33" height="5" rx='3' fill="white" />
            <rect x="22" y="20" width="22" height="5" rx='3' fill="white" />
          </svg>
        </button>
      </section>
    </div>
  )
}