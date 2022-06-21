import React from 'react'
import images from '../imageindex'

export default function Features() {
  return (
      <div class='text-center w-full 
          md:w-2/3 md:mx-auto lg:grid lg:grid-cols-2'>
          <h3 class="text-3xl md:text-6xl mx-28 py-4 col-span-2">FEATURES</h3>
          <p class="mx-auto w-80 pb-8 md:mx-auto md:w-[600px] col-span-2">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
          <img src={images.chatbot} alt='chatbot' class="relative w-[60%] left-[20%]
              lg:min-w-[696px] lg:justify-self-end lg:left-[200px]"/>
          <img src={images.linechart} alt='linechart' class="relative w-[40%] left-[30%] -top-[68px] 
              lg:order-last lg:min-w-[400px] lg:justify-self-end lg:relative lg:left-[240px] lg:-top-64"/>
          <ul class='text-left mx-auto w-72
              md:mx-auto lg:mt-24 lg:w-96 lg:px-16 lg:ml-48'>
              <li class='pb-12 flex flex-wrap'>
                <img src={ require('./Vectors/menu.png') } alt='menu' class='object-none basis-1/6'/>
                <h6 class='text-xl font-medium basis-5/6'>
                    A single source of truth</h6>
                <p class='py-6 px-2'>When you add work to your Slate calander we automatically calculate useful insights.</p>
              </li>
              <li class='pb-12 flex flex-wrap'>
                <img src={ require('./Vectors/alienhead.png') } alt='alienhead' class='object-none basis-1/6 w-8'/>
                <h6 class='text-xl font-medium basis-5/6 m'>
                    Intuitive <br />Interface</h6>
                <p class='py-6 px-2'>When you add work to your Slate calander we automatically calculate useful insights.</p>
              </li>
              <li class='pb-12 flex flex-wrap'>
                <img src={ require('./Vectors/infinity.png') } alt='infinity' class='object-none basis-1/6 scale-75'/>
                <h6 class='text-xl font-medium basis-5/6'>
                  Or with rules</h6>
                <p class='py-6 px-2'>When you add work to your Slate calander we automatically calculate useful insights.</p>
              </li>
          </ul>
      </div>
  )
}
