import React from 'react'
import images from '../imageindex'

export default function Header() {
  return (
    <div>
      <h3>Work at the speed of thought.</h3>
      <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <button>Try For Free</button>
      <button>Learn More</button>
      <img src={images.dashboard} alt='dashboard' />
      <img src={images.boards} alt='boards' />
      <img src={images.chatbot} alt='chatbot' />
    </div>
  )
}


