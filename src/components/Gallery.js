import React from 'react'
import images from '../imageindex'

export default function Gallery() {
  return (
    <div class='text-center w-full mt-32 px-16 md:pt-40 md:mx-auto md:w-2/3'>
        <h3 class="text-3xl py-4 md:text-6xl">Gallery</h3>
        <p class='pb-8'>We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.</p>
        <section class='hidden md:flex md:gap-5 md:mx-auto md:justify-center md:mt-8'>
          <p class='overflow-hidden w-[225px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.galleryOne} alt='pic' class='rounded-xl origin-top-left '/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.galleryTwo} alt='pic' class='rounded-xl scale-[200%] translate-y-16'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.galleryThree} alt='pic' class='rounded-xl scale-[200%] translate-y-16'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.galleryFour} alt='pic' class='rounded-xl scale-[200%] translate-y-16'/>
          </p>
        </section>
        <section class='hidden md:flex md:gap-5 md:mx-auto md:justify-center md:mt-8'>
          <p class='overflow-hidden w-[395px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.galleryFive} alt='pic' class='rounded-xl my-6 scale-125'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.gallerySix} alt='pic' class='rounded-xl my-6 scale-[200%] translate-y-12'/>
          </p>
          <p class='overflow-hidden w-[395px] h-[285px] border border-custom-black rounded-xl'>
            <img src={images.gallerySeven} alt='pic' class='rounded-xl my-6 scale-[115%] -translate-y-2'/>
          </p>
        </section>
        <section class='md:hidden flex flex-wrap mx-4 gap-y-4 overflow-hidden'>
          <p class='overflow-hidden h-48 border border-custom-black rounded-xl'>
            <img src={images.galleryOne} alt='pic' class='rounded-xl min-w-max h-auto origin-top-left -translate-x-2 -translate-y-20 scale-[60%]'/>
          </p>
          <p class='overflow-hidden h-48 border border-custom-black rounded-xl'>
            <img src={images.galleryEight} alt='pic' class='rounded-xl min-w-max h-auto origin-top-left -translate-x-20 scale-[65%]'/>
          </p>
          <p class='overflow-hidden h-48 border border-custom-black rounded-xl'>
            <img src={images.galleryNine} alt='pic' class='rounded-xl min-w-max h-auto origin-top-left -translate-x-10 -translate-y-4 scale-[50%]'/>
          </p>
          <p class='overflow-hidden h-48 border border-custom-black rounded-xl'>
            <img src={images.galleryTen} alt='pic' class='rounded-xl min-w-max h-auto origin-top-left -translate-x-20 -translate-y-10 scale-[65%]'/>
          </p>
        </section>
        <button class="border-2 mt-8 w-44 h-16 justify-self-center font-bold">See More</button>
    </div>
  )
}
