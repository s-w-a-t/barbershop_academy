'use client'

import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import Video from '../Video'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { onAutoplayTimeLeft } from '@/utils/onAutoplayTimeLeft'
import s from './About.module.scss'

import proraso from '@/assets/img/brands/proraso.avif'
import uppercut from '@/assets/img/brands/uppercut.avif'
import wahl from '@/assets/img/brands/wahl.avif'
import mitte from '@/assets/img/brands/mitte.avif'
import reuzel from '@/assets/img/brands/reuzel.avif'
import franz from '@/assets/img/brands/franz.avif'

const MOCK_BRANDS = [proraso, uppercut, wahl, mitte, reuzel, franz]
const MOCK_VIDEO = 'https://www.youtube.com/watch?v=AXH1r0cyacU'
const MOCK_LIST = Array.from({ length: 4 })

const About = () => {
  const containerRef = useRef(null)

  const [play, setPlay] = useState(false)

  const swiperParams = {
    updateOnWindowResize: true,
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    rewind: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      type: 'bullets',
    },
  }
  return (
    <section id="about" className={clsx('container', s.about)}>
      <div className={s.about_inner}>
        <h2 className={s.about_title}>Про нас</h2>

        <p className={s.about_descr}>
          Це не лише місце, де ви довіряєте свій вигляд професіоналам, але й
          атмосфера, де ви можете відчути себе комфортно та вільно. Тут чоловік
          виходить не просто з ідеальною стрижкою, а з атмосферою справжнього
          мужності. Вперед, до чоловічого стилю без обмежень у Brutal
          Barbershop!"
        </p>

        <div className={s.about_video}>
          <Video
            url={MOCK_VIDEO}
            autoPlay
            playsInline
            playing={play}
            muted
            onReady={() => setPlay(true)}
          />
        </div>

        <div
          ref={containerRef}
          className={clsx(s.about_gallery, { [s.wide]: MOCK_LIST.length > 1 })}
        >
          <Swiper
            {...swiperParams}
            onAutoplayTimeLeft={(_, __, progress) =>
              onAutoplayTimeLeft(progress, containerRef.current)
            }
            className={s.about_list}
          >
            {MOCK_LIST.map((_, i) => (
              <SwiperSlide key={i} className={s.about_media}>
                <Image
                  src={'https://picsum.photos/550/850.webp' + `?${i}`}
                  alt={'Image ' + (i + 1)}
                  fill
                  sizes="(max-width: 739.98px) 278px, 405px"
                  className={s.about_pic}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={s.about_brands}>
        <Marquee autoFill>
          {MOCK_BRANDS.map((item, i) => (
            <Image
              key={i}
              height={128}
              src={item}
              alt={'Logo ' + (i + 1)}
              className={s.about_logo}
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default About
