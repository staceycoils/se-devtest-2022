import React from 'react'

export default function Partners() {
  return (
    <div class='text-center w-full mt-40 px-16'>
        <h3 class="text-3xl py-4">Partners</h3>
        <p class='pb-8'>We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.</p>
        <section class='grid grid-cols-3 gap-4 mx-2 mb-12 place-items-center
            md:grid-cols-6 md:mx-96'>
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
