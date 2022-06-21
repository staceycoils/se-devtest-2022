import React from 'react'

export default function Partners() {
  return (
    <div class='text-center mt-40 mx-auto'>
        <h3 class="text-5xl py-4 md:text-6xl">Partners</h3>
        <p class='pb-8 mx-16 md:mx-auto md:text-2xl'>We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.</p>
        <section class='grid grid-cols-3 gap-4 mx-12 mb-12 place-items-center 
            md:grid-cols-6 md:max-w-[800px] md:mx-auto'>
          <img src={ require('./Vectors/logos_apple-app-store.png') } alt='app store logo'/>
          <img src={ require('./Vectors/logos_apiary.png') } alt='apiary logo'/>
          <img src={ require('./Vectors/logos_android-icon.png') } alt='android logo'/>
          <img src={ require('./Vectors/logos_basecamp.png') } alt='basecamp logo'/>
          <img src={ require('./Vectors/logos_airbnb.png') } alt='airbnb logo'/>
          <img src={ require('./Vectors/logos_ibm.png') } alt='ibm logo'/>
        </section>
      <button class="border-2 w-44 h-16 justify-self-center font-bold">All Partners</button>
    </div>
  )
}
