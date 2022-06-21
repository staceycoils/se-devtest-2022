import React from 'react'
import images from '../imageindex'

export default function Opentype() {
  return (
    <div id='opentype' class='bg-custom-grey text-center pt-32 px-auto w-full 
        md:h-[370px] md:p-0 md:mb-40 md:mx-auto md:overflow-hidden md:grid md:grid-cols-2 md:x-[600px] 
        lg:x-[780px] lg:rounded-3xl  
        xl:w-[1219px]' >
      <p>
        <h3 class="text-5xl py-4 w-96 mx-auto
          md:w-[350px] md:h-[124px] md:py-0 md:text-4xl md:mt-20 md:justify-self-center md:mx-auto
          lg:text-5xl lg:w-[500px] ">
            OpenType features and Variable Fonts
        </h3>
        <button class="bg-custom-lilac w-44 h-12 mt-8 mb-20 justify-self-center font-bold
            lg:mr-[250px]">Try For Free</button>
      </p>
      <img src={images.prototyping} alt='prototype' class='px-12
          md:w-[589px] md:mt-8 md:justify-self-end md:px-0'/>
    </div>
  )
}
