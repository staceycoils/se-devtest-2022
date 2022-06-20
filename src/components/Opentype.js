import React from 'react'
import images from '../imageindex'

export default function Opentype() {
  return (
    <div class='bg-custom-grey text-center w-full pt-32 px-16
        md:w-[1219px] md:h-[370px] md:p-0 md:mb-40 md:mx-auto md:overflow-hidden md:grid md:grid-cols-2 md:rounded-3xl'>
      <p>
        <h3 class="text-4xl py-4
          md:w-[500px] md:h-[124px] md:py-0 md:text-5xl md:mt-20 md:justify-self-center md:mx-auto">
            OpenType features and Variable Fonts
        </h3>
        <button class="bg-custom-lilac w-44 h-12 mt-8 mb-20 justify-self-center font-bold
            md:mr-[250px]">Try For Free</button>
      </p>
      <img src={images.prototyping} alt='prototype' class='
          md:w-[589px] md:mt-8 md:justify-self-end '/>
    </div>
  )
}
