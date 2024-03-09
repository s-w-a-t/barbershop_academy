'use client'

import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'
import SwiperArrowButton from '../SwiperArrowButton'
import s from './Barbers.module.scss'

const MOCK_LIST = [
  {
    level: 'base',
  },
  {
    level: 'base',
  },
  {
    level: 'base',
  },
  {
    level: 'base',
  },
  {
    level: 'upper',
  },
  {
    level: 'upper',
  },
  {
    level: 'top',
  },
  {
    level: 'top',
  },
  {
    level: 'top',
  },
  {
    level: 'top',
  },
]

const MOCK_ITEM = {
  pics: [
    'https://picsum.photos/600/800',
    'https://picsum.photos/600/800',
    'https://picsum.photos/600/800',
  ],
  name: 'Ім’я Барбера',
  descr:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  link: '#',
}

const Barbers = () => {
  const LIST_BASE = MOCK_LIST.filter((item) => item.level === 'base')
  const LIST_UPPER = MOCK_LIST.filter((item) => item.level === 'upper')
  const LIST_TOP = MOCK_LIST.filter((item) => item.level === 'top')

  const tabs = [
    {
      label: 'Всі',
      content: MOCK_LIST,
    },
    {
      label: 'Барбери',
      content: LIST_BASE,
    },
    {
      label: 'Старші барбери',
      content: LIST_UPPER,
    },
    {
      label: 'Топ барбери',
      content: LIST_TOP,
    },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])
  const [list, setList] = useState(MOCK_LIST)

  const swiperRef = useRef(null)

  const goToFirstSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0)
    }
  }

  const swiperParams = {
    updateOnWindowResize: true,
    modules: [Navigation],
    spaceBetween: 32,
    slidesPerView: 1,
    centeredSlides: false,
    navigation: {
      prevEl: '#swiper-prev-barbers',
      nextEl: '#swiper-next-barbers',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 86,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 32,
      },
    },
  }
  return (
    <section id="barbers" className={clsx('container', s.barbers)}>
      <div className={s.barbers_heading}>
        <h2 className="title-indent">Барбери</h2>

        <div className={s.barbers_tabs}>
          {tabs.map(({ label, content }) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setActiveTab(label)
                setList(content)
                goToFirstSlide()
              }}
              disabled={label === activeTab || content === list}
              className={clsx(s.barbers_tab, {
                [s.active]: label === activeTab || content === list,
              })}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={s.barbers_wrapper}>
        <Swiper ref={swiperRef} {...swiperParams} className={s.barbers_list}>
          {list.map(({ level }, i) => (
            <SwiperSlide key={i} className={s.barbers_slide}>
              <div className={s.barbers_item}>
                <div className={s.barbers_media}>
                  {MOCK_ITEM.pics.length > 1 ? (
                    <Swiper
                      effect="fade"
                      autoplay={{
                        delay: 10000,
                      }}
                      allowTouchMove={false}
                      modules={[Autoplay, EffectFade]}
                      className={s.barbers_pics}
                    >
                      {MOCK_ITEM.pics.map((item, j) => (
                        <SwiperSlide key={j}>
                          <Image
                            src={item + '?' + i + j + level}
                            alt={MOCK_ITEM.name}
                            fill
                            sizes="293px"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <Image
                      src={MOCK_ITEM.pics[0] + `?${i}`}
                      alt={MOCK_ITEM.name}
                      fill
                      sizes="293px"
                    />
                  )}
                </div>

                <span className={s.barbers_name}>{MOCK_ITEM.name}</span>
                <span className={s.barbers_descr}>{MOCK_ITEM.descr}</span>

                <a
                  href={MOCK_ITEM.link}
                  className={clsx('btn btn--primary', s.barbers_btn)}
                >
                  Запис
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperArrowButton
          type="prev"
          variant="barbers"
          hidden={list.length < 2}
          className={clsx('aaaa', s.barbers_arrow, s.prev)}
        />
        <SwiperArrowButton
          type="next"
          variant="barbers"
          hidden={list.length < 2}
          className={clsx('aaaa', s.barbers_arrow, s.next)}
        />
      </div>
    </section>
  )
}

export default Barbers
