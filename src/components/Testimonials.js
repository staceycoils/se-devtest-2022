import React from 'react'
import images from '../imageindex'

export default function Testimonials() {
  return (
    <div>
      <h3>Testimonials</h3>
      <span>
        <section>
          <img src={images.clientOne} alt='client one'/>
          <p>Claire Bell</p>
          <p>Designer</p>
          <p>
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
          </p>
        </section>
        <section>
          <img src={images.clientTwo} alt='client two'/>
          <p>Francisco Lane</p>
          <p>Designer</p>
          <p>
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
          </p>
        </section>
      </span>
      <span>
        <section>
          <img src={images.clientThree} alt='client three'/>
          <p>Ralph Fisher</p>
          <p>Designer</p>
          <p>
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
          </p>
        </section>
        <section>
          <img src={images.clientFour} alt='client four'/>
          <p>Jorge Murphy</p>
          <p>Designer</p>
          <p>
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
            Slate helps you see how many more days you need to work to reach your finacial goal for the month and year.
          </p>
        </section>
      </span>
    </div>
  )
}
