import React from 'react'
import { Link } from 'react-router-dom'
import images from '../imageindex'

export default function Header() {
  return (
    <div id='header' class='text-center grid grid-rows-7 w-full mt-12 
        md:mt-20'>
      <h3 class='text-5xl mx-16 my-4 leading-tight
          md:text-7xl md:w-[800px] md:mx-auto md:font-medium'>
        Work at the speed of thought</h3>
      <p class='mx-12 pb-12 
          md:text-2xl md:w-[800px] md:mx-auto md:pb-24 md:pt-12'>
        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan 
        <br class='md:hidden'/> their schedule.</p>
      <section class='w-44 mx-auto
          md:w-fit'>
        <Link to={'/product'}>
        <button class='bg-custom-lilac w-44 h-16 mb-4 justify-self-center font-bold 
            md:mr-4 
            hover:bg-gray-700 transition-all duration-500'>
          Try For Free</button>
        </Link>
        <Link to={'/about'}>
        <button class='border w-44 h-16 justify-self-center font-bold 
            md:ml-4
            hover:bg-gray-700 transition-all duration-500'>
          Learn More</button>
        </Link>
      </section>
      <section class='relative overflow-x-hidden'>
        <p class='absolute h-[300px] w-full top-20 bg-gradient-to-t from-black to-transparent z-50
            md:h-[800px]'></p>
        <img src={images.dashboard} alt='dashboard' 
          class='relative w-[184px] mx-auto left-0 top-16 skew-x-[15deg] -rotate-[37deg]
              md:w-[465px] md:mx-auto md:left-0' />
        <img src={images.chatbot} alt='chatbot' 
          class='relative w-[176px] mx-auto left-[145px] top-[4px] -skew-x-[16deg] rotate-[37deg]
              md:w-[446px] md:left-[360px] md:-top-[90px]' />
        <img src={images.boards} alt='boards' 
          class='relative w-[184px] mx-auto -left-[146px] top-[-162px] -skew-x-[16deg] rotate-[38deg]
              md:w-[466px] md:-left-[370px] md:-top-[510px]' />
      </section>
    </div>
  )
}


