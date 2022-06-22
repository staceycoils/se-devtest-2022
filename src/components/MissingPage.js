import React from 'react'
import { Link } from 'react-router-dom'

export default function MissingPage() {
  return (
      <section id='error' 
        class='w-fit h-max border-t border-b border-white text-center 
            md:mx-auto md:mt-[10%] md:w-[400px] md:h-[400px] md:border md:rounded-2xl'>
          <h3 class='text-8xl my-6'>Oops!</h3>
          <p class='mx-16 my-6'>
              Unfortunately this page is still under construction.
          </p>
          <p class='mx-16 my-6'>
              We apologise for the error, please check back later.
          </p>
          <Link to={'/'}>
          <button class="bg-custom-lilac w-64 mb-12 h-16 my-4 justify-self-center font-bold 
            md:mb-0 md:w-44
            hover:bg-gray-700 transition-all duration-500">
          Back</button>
          </Link>
      </section>
  )
}
