'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Marquee from 'react-fast-marquee'
import GalleryItem from './component'
import s from './Gallery.module.scss'

const MOCK_LIST = [
  'https://picsum.photos/550/850?1.webp',
  'https://picsum.photos/550/850?2.webp',
  'https://picsum.photos/550/850?3.webp',
  'https://picsum.photos/550/850?4.webp',
  'https://picsum.photos/550/850?5.webp',
  'https://picsum.photos/550/850?6.webp',
  'https://picsum.photos/550/850?7.webp',
  'https://picsum.photos/550/850?8.webp',
]

const Gallery = () => {
  const [play, setPlay] = useState(true)
  return (
    <section id="gallery" className={clsx('container', s.gallery)}>
      <h2 className="title-indent">Галерея</h2>

      <div className={s.gallery_wrapper}>
        <Marquee
          autoFill
          play={play}
          gradient
          gradientColor="#000"
          gradientWidth={16}
        >
          <div className={s.gallery_list}>
            {MOCK_LIST.map((item, i) => (
              <GalleryItem
                key={i}
                index={i}
                pic={item}
                data={MOCK_LIST}
                setPlay={setPlay}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Gallery
