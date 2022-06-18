import React from 'react'
import images from '../imageindex'

export default function Gallery() {
  return (
    <div>
        <h3>Gallery</h3>
        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
        <section>
        <img src={images.galleryOne} alt='pic' />
        <img src={images.galleryTwo} alt='pic' />
        <img src={images.galleryThree} alt='pic' />
        <img src={images.galleryFour} alt='pic' />
        </section>
        <section>
        <img src={images.galleryFive} alt='pic' />
        <img src={images.gallerySix} alt='pic' />
        <img src={images.gallerySeven} alt='pic' />
        </section>
        <button>See More</button>
    </div>
  )
}
