import React from 'react'
import images from '../imageindex'

export default function Features() {

  return (
      <div>
          <h3>Features</h3>
          <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
          <img src={images.chatbot} alt='chatbot' />
          <img src={images.linechart} alt='linechart' />
          <ul>
              <li>
                  <h6>A single source of truth</h6>
                  <p>When you add work to your Slate calander we automatically calculate useful insights</p>
              </li>
              <li>
                  <h6>Intuitive Interface</h6>
                  <p>When you add work to your Slate calander we automatically calculate useful insights</p>
              </li>
              <li>
                  <h6>Or with rules</h6>
                  <p>When you add work to your Slate calander we automatically calculate useful insights</p>
              </li>
          </ul>
      </div>
  )
}
