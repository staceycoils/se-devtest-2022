import React from 'react'
import images from '../imageindex'

export default function Contents() {
  return (
    <div>
      <h3>Contents</h3>
      <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <section>
        <h6>Work</h6>
        <p>Ever wondered if youre too reliant on a client for work? Slate helps you identify.</p>
        <button>Sign Up</button>
        <img src={images.transactions} alt='transactions' />
      </section>
      <section>
        <h6>Design with real data</h6>
        <p>Ever wondered if youre too reliant on a client for work? Slate helps you identify.</p>
        <button>Try For Free</button>
        <img src={images.notifBoard} alt='notification board' />
      </section>
    </div>
  )
}
