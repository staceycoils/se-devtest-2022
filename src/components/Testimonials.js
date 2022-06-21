import React from 'react'
import images from '../imageindex'

export default function Testimonials() {
  return (
    <div class='text-center w-full my-40 px-16
        lg:grid lg:gap-8 lg:grid-cols-2'>
      <h3 class="text-5xl py-4 md:col-span-2 md:text-6xl">Testimonials</h3>
      <span id='mobTestimonials' class='md:hidden'>
        <section class='border border-gray-500 rounded-xl my-6 p-8 flex flex-wrap' >
          <img src={images.clientOneMob} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Wade Steward
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            your financial goal for the month and year.
          </p>
        </section>
        <section class='border border-gray-500 rounded-xl my-6 p-8 flex flex-wrap' >
          <img src={images.clientTwoMob} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Philip Watson
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            your financial goal for the month and year.
          </p>
        </section>
        <section class='border border-gray-500 rounded-xl my-6 p-8 flex flex-wrap' >
          <img src={images.clientThreeMob} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Arthur Wilson
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            your financial goal for the month and year.
          </p>
        </section>
        <section class='border border-gray-500 rounded-xl my-6 p-8 flex flex-wrap' >
          <img src={images.clientFourMob} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Regina Black
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            your financial goal for the month and year.
          </p>
        </section>
      </span>
      <span id='webTestimonialsLeft' class='hidden md:inline md:w-[430px] md:justify-self-end'>
        <section class='border border-gray-500 w-[430px] rounded-xl my-6 p-8 flex flex-wrap 
          md:my-0 md:mb-6 md:mx-auto' >
          <img src={images.clientOne} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Claire Bell
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year. 
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            your financial goal for the month and year.
          </p>
        </section>
        <section class='border border-gray-500 w-[430px] rounded-xl my-6 p-8 flex flex-wrap md:my-0 md:mx-auto' >
          <img src={images.clientTwo} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Francisco Lane
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year. 
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
          </p>
        </section>
      </span>
      <span id='webTestimonialsLRight' class='hidden md:inline md:w-[430px] md:justify-self-start'>
        <section class='border border-gray-500 w-[430px] rounded-xl my-6 p-8 flex flex-wrap md:my-0 md:mx-auto md:mb-6' >
          <img src={images.clientThree} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Ralph Fisher
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
          </p>
        </section>
        <section class='border border-gray-500 w-[430px] rounded-xl my-6 p-8 flex flex-wrap md:my-0 md:mx-auto' >
          <img src={images.clientFour} alt='client one' class='rounded-full w-12'/>
          <p class='pl-4 font-bold text-justify'>Jorge Murphy
          <br/>Designer</p>
          <p class='text-left mt-8'>
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
          </p>
        </section>
      </span>
    </div>
  )
}
