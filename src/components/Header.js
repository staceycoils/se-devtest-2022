import React from 'react'
import images from '../imageindex'

export default function Header() {
  return (
    <div class="text-center grid grid-rows-7 w-full md:mt-20">
      <h3 class="text-3xl mx-28 py-4
          md:text-7xl md:w-[800px] md:mx-auto md:font-medium">Work at the speed of thought.</h3>
      <p class="px-24 pb-12 md:w-[700px] md:mx-auto">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <section class='w-44 mx-auto
          md:w-fit'>
        <button class="bg-custom-lilac w-44 h-16 mb-4 justify-self-center font-bold md:mr-4">Try For Free</button>
        <button class="border w-44 h-16 justify-self-center font-bold md:ml-4">Learn More</button>
      </section>
      <section class="relative overflow-x-hidden">
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


