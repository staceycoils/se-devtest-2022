import React from 'react'
import images from '../imageindex'

export default function Features() {
  return (
      <div id='features' class='text-center w-full 
          md:w-2/3 md:mx-auto md:-mt-64
          lg:grid lg:grid-cols-2'>
        <h3 class="text-5xl py-8 col-span-2
            md:text-7xl mx-auto">
          FEATURES</h3>
        <p class="mx-auto w-[330px] pb-8 col-span-2
            md:mx-auto md:w-[500px] md:text-2xl md:pb-20 
            lg:w-[600px] 
            xl:w-[800px]">
          Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
        </p>
        <img src={images.chatbot} alt='chatbot' class="relative w-[60%] left-[20%]
            lg:min-w-[696px] lg:justify-self-end lg:left-[200px]"/>
        <img src={images.linechart} alt='linechart' class="relative w-[40%] left-[30%] -top-[68px] 
            lg:order-last lg:min-w-[400px] lg:justify-self-end lg:relative lg:left-[230px] lg:-top-[252px]"/>
        <ul class='text-left mx-auto w-[266px]
            md:mx-auto 
            lg:mt-24 lg:w-[400px] lg:px-16 lg:ml-48'>
          <li class='pb-12 flex flex-wrap'>
            <img src={ require('./Vectors/menu.png') } alt='menu' class='object-none basis-1/6'/>
            <h6 class='text-xl font-bold basis-5/6'>
                A single source of truth</h6>
            <p class='py-6 px-2'>When you add work to your Slate calander we automatically calculate useful insights.</p>
          </li>
          <li class='pb-12 flex flex-wrap'>
            <img src={ require('./Vectors/alienhead.png') } alt='alienhead' class='object-none basis-1/6 w-8'/>
            <h6 class='text-xl font-bold basis-5/6 m'>
                Intuitive <br />Interface</h6>
            <p class='py-6 px-2'>When you add work to your Slate calander we automatically calculate useful insights.</p>
          </li>
          <li class='pb-12 flex flex-wrap'>
            <img src={ require('./Vectors/infinity.png') } alt='infinity' class='object-none basis-1/6 scale-75'/>
            <h6 class='text-xl font-bold basis-5/6'>
              Or with rules</h6>
            <p class='py-6 px-2'>When you add work to your Slate calander we automatically calculate useful insights.</p>
          </li>
        </ul>
      </div>
  )
}
