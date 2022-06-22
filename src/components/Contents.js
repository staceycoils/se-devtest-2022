import React from 'react'
import images from '../imageindex'
import { Link } from 'react-router-dom'

export default function Contents() {
  return (
    <div id='contents' class='text-center w-full mt-24 px-16 
        md:grid md:grid-cols-2 md:mx-auto md:px-0 md:mt-0'>
      <h3 class='text-5xl py-4 
          md:text-6xl md:col-span-2'>Contents</h3>
      <p class='md:text-2xl md:col-span-2'>We focus on ergonomics and meeting you where you work.
        <br />It's only a keystroke away.</p>
      <section class='bg-white text-black my-6 px-4 py-8 rounded-xl 
          md:mx-4 md:mt-16 md:ml-auto md:w-80 
          lg:w-[480px]' >
        <h6 class='font-bold py-2'>Work</h6>
        <p class='text-gray-600 py-4 
            md:px-[88px]'>Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
        <Link to={'/login'}>
          <button class='bg-custom-lilac w-1/2 h-12 my-12 font-bold text-white 
              md:mt-20
              hover:bg-gray-700 transition-all duration-500'>
            Sign Up</button>
          </Link>
        <p>
          <img src={ require('./Vectors/Macbook_Pro.png') } alt='macbook pro' class='mx-auto'/>
        </p>
      </section>
      <section class='bg-white text-black my-6 px-4 py-8 rounded-xl 
          md:mx-4 md:mt-16 md:mr-auto md:w-80 
          lg:w-[480px]'>
        <h6 class='font-bold py-2' >Design with real data</h6>
        <p class='text-gray-600 py-4 md:px-[88px]'>Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
        <Link to={'/product'}>
          <button class='bg-custom-lilac w-1/2 h-12 my-12 font-bold text-white
              hover:bg-gray-700 transition-all duration-500'>
            Try For Free</button>
        </Link>
        <img src={images.notifBoard} alt='notification board' class='relative w-[80%] ml-[10%] rounded-xl'/>
      </section>
    </div>
  )
}
