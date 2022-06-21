import React from 'react'
import images from '../imageindex'

export default function Gallery() {
  return (
    <div class='text-center w-full mx-auto mt-32 
        md:pt-40 lg:mx-auto xl:w-fit'>
        <h3 class="text-3xl py-4 md:text-6xl">Gallery</h3>
        <p class='pb-8'>We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.</p>
        <section id='webgallerytop' class='hidden md:flex md:gap-5 md:mx-auto md:justify-center md:mt-8
            md:w-2/3 md:flex-wrap lg:w-full lg:flex-nowrap'>
          <p class='overflow-hidden w-[225px] h-[285px]'>
            <img src={images.galleryOne} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px]'>
            <img src={images.galleryTwo} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px]'>
            <img src={images.galleryThree} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px]'>
            <img src={images.galleryFour} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
        </section>
        <section id='webgallerybot' class='hidden md:flex md:gap-5 md:mx-auto md:justify-center md:mt-8'>
          <p class='overflow-hidden w-[395px] h-[285px]'>
            <img src={images.galleryFive} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden w-[225px] h-[285px]'>
            <img src={images.gallerySix} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden w-[395px] h-[285px]'>
            <img src={images.gallerySeven} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
        </section>
        <section id='mobgallery' class='md:hidden w-[250px] grid grid-rows-4 mx-auto gap-y-4 overflow-hidden'>
          <p class='overflow-hidden h-[285px] mx-auto border rounded-2xl'>
            <img src={images.galleryOne} alt='pic' class='rounded-xl object-cover h-auto w-full -translate-y-4'/>
          </p>
          <p class='overflow-hidden h-[285px] mx-auto '>
            <img src={images.galleryEight} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden h-[285px] mx-auto'>
            <img src={images.galleryNine} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
          <p class='overflow-hidden h-[285px] mx-auto'>
            <img src={images.galleryTen} alt='pic' class='rounded-xl object-cover h-full w-auto'/>
          </p>
        </section>
        <button class="border-2 mt-8 w-44 h-16 justify-self-center font-bold">See More</button>
    </div>
  )
}
