import React from 'react'

export default function Footer() {
  return (
    <footer id='footer' class='w-full px-10 pb-40 text-xl font-bold
        md:grid md:grid-cols-3 lg:grid-cols-6 md:mx-auto md:pb-20 md:x-[600px] 
        lg:x-[780px] 
        xl:w-[1219px]'>
      <p class='mt-40 mx-10 
          md:mt-16'>Fingertipe
        <ul class='text-base'>
          <li class='mt-8'>Home</li>
          <li class='mt-4'>Examples</li>
          <li class='mt-4'>Pricing</li>
          <li class='mt-4'>Updates</li>
        </ul>
      </p>
      <p class='mt-16 mx-10'>Resources
        <ul class='text-base'>
          <li class='mt-8'>Home</li>
          <li class='mt-4'>Examples</li>
          <li class='mt-4'>Pricing</li>
          <li class='mt-4'>Updates</li>
        </ul>
      </p>
      <p class='mt-16 mx-10'>About
        <ul class='text-base'>
          <li class='mt-8'>Home</li>
          <li class='mt-4'>Examples</li>
          <li class='mt-4'>Pricing</li>
          <li class='mt-4'>Updates</li>
        </ul>
      </p>
      <br class='hidden lg:block' />
      <div class='mt-20 mx-auto grid grid-cols-4 items-center gap-y-3 max-w-20
          md:col-span-3 
          lg:col-span-2'>
        <img src={ require('./Vectors/bx_bx-map.png') } alt='map marker' class='justify-self-center'/>
        <p class='col-span-3 text-sm'>
          7480 Mockingbird Hill undefined
        </p>
        <img src={ require('./Vectors/ic_baseline-phone-android.png') } alt='phone' class='justify-self-center'/>
        <p class='col-span-3 text-sm'>
          &#40;239&#41; 555-0108
        </p>
        <img src={ require('./Vectors/ant-design_twitter-outlined.png') } alt='map marker' class='justify-self-center'/>
        <img src={ require('./Vectors/ant-design_facebook-filled.png') } alt='map marker' class='justify-self-center'/>
        <img src={ require('./Vectors/ant-design_linkedin-filled.png') } alt='map marker' class='justify-self-center'/>
      </div>
    </footer>
  )
}
