'use client'

import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  EffectFade,
} from 'swiper/modules'
import { onAutoplayTimeLeft } from '@/utils/onAutoplayTimeLeft'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import Lines from '../Lines'
import s from './Hero.module.scss'

import hero1 from '@/assets/img/hero/hero1.avif'
import hero2 from '@/assets/img/hero/hero2.avif'
import hero3 from '@/assets/img/hero/hero1.avif'
import hero4 from '@/assets/img/hero/hero2.avif'

const MOCK_LIST = [hero1, hero2, hero3, hero4]

const BTN_MOCK = {
  title: 'Запис',
  link: 'https://b490296.alteg.io/company/464036',
}

const Hero = () => {
  const containerRef = useRef(null)

  const thumbs = MOCK_LIST.slice(1).concat(MOCK_LIST[0])

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const swiperMainParams = {
    updateOnWindowResize: true,
    modules: [Autoplay, Pagination, Navigation, Thumbs, EffectFade],
    effect: 'fade',
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '#swiper-pagination-hero',
      type: 'bullets',
    },
    navigation: {
      prevEl: '#swiper-prev-hero',
      nextEl: '#swiper-next-hero',
    },
  }

  const swiperThumbParams = {
    updateOnWindowResize: true,
    modules: [Thumbs, EffectFade],
    effect: 'fade',
    allowTouchMove: false,
    loop: true,
  }
  return (
    <section ref={containerRef} className={s.hero}>
      <div className={s.hero_wrapper}>
        <span className={s.hero_label}>Brutal</span>

        <Swiper
          {...swiperMainParams}
          onAutoplayTimeLeft={(_, __, progress) =>
            onAutoplayTimeLeft(progress, containerRef.current)
          }
          thumbs={{ swiper: thumbsSwiper }}
          className={s.hero_pics}
        >
          {MOCK_LIST.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                width={1440}
                height={1080}
                priority
                sizes="(max-width: 739.98px) 93vw, 100vw"
                src={item}
                alt={'Image ' + (i + 1)}
                className={clsx(s.hero_pic, s.main)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={s.hero_nav}>
        <button
          id="swiper-prev-hero"
          type="button"
          aria-label="prev"
          className={clsx(s.hero_nav_item, s.prev)}
        >
          <ArrowRight />
        </button>
        <button
          id="swiper-next-hero"
          type="button"
          aria-label="next"
          className={s.hero_nav_item}
        >
          <ArrowRight />
        </button>
      </div>

      <div className={clsx('container', s.hero_inner)}>
        <h1 className={s.hero_title}>
          Ваш стиль – наша робота, ваша впевненість – наше досягнення.
        </h1>

        <Swiper
          {...swiperThumbParams}
          onSwiper={setThumbsSwiper}
          onAutoplayTimeLeft={(_, __, progress) =>
            onAutoplayTimeLeft(progress, containerRef.current)
          }
          className={s.hero_thumbs}
        >
          {thumbs.map((item, j) => (
            <SwiperSlide key={j}>
              <Image
                loading="eager"
                src={item}
                alt={'Image ' + (j + 1)}
                className={clsx(s.hero_pic, s.thumbs)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href={BTN_MOCK.link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx('btn btn--primary', s.hero_cta)}
        >
          {BTN_MOCK.title}
        </a>

        <div id="swiper-pagination-hero" className={s.hero_pagination} />
      </div>

      <Lines className={s.hero_lines} />
    </section>
  )
}

export default Hero
