import React from 'react'
import images from '../imageindex'

export default function Contents() {
  return (
    <div class='text-center w-full mt-24 px-16 
        md:grid md:grid-cols-2' >
      <h3 class="text-3xl py-4 md:text-6xl md:col-span-2">Contents</h3>
      <p class='md:col-span-2'>We focus on ergonomics and meeting you where you work.
        <br />It's only a keystroke away.</p>
      <section class='bg-white text-black my-6 px-4 py-8 rounded-xl 
          md:mx-4 md:mt-16 md:ml-auto md:w-96' >
        <h6 class='font-bold py-2' >Work</h6>
        <p class='text-gray-600 py-4'>Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
        <button class="bg-custom-lilac w-1/2 h-12 my-12 font-bold text-white">Sign Up</button>
        <p>
          <img src={ require('./Vectors/Macbook_Pro.png') } alt='macbook pro' class='mx-auto'/>
        </p>
      </section>
      <section class='bg-white text-black my-6 px-4 py-8 rounded-xl md:mx-4 md:mt-16 md:mr-auto md:w-96'>
        <h6 class='font-bold py-2' >Design with real data</h6>
        <p class='text-gray-600 py-4'>Ever wondered if you're too reliant on a client for work? Slate helps you identify.</p>
        <button class="bg-custom-lilac w-1/2 h-12 my-12 font-bold text-white">Try For Free</button>
        <img src={images.notifBoard} alt='notification board' class='relative w-[80%] ml-[10%] rounded-xl'/>
      </section>
    </div>
  )
}
