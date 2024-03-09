'use client'

import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import SwiperArrowButton from '../SwiperArrowButton'
import useMatchMedia from '@/hooks/useMatchMedia'
import Popup from '../Popup'
import ProductMore from './components/ProductMore'
import s from './Products.module.scss'

const MOCK_LIST = Array.from({ length: 10 })

const MOCK_ITEM = {
  pic: 'https://picsum.photos/600/900.webp',
  title: 'Парфум для бороди',
  label: 'Nishman Beard & Mustache Parfum Adonis 75ml',
  descr:
    'Тут може бути якась додаткова інформація чи характеристики даного продукт або спосіб використання і ще багато речей, які можна описати в цьому рядку',
  link: '#',
}

const Products = () => {
  const isMobile = useMatchMedia('(max-width: 739.98px)')

  const swiperParams = {
    updateOnWindowResize: true,
    modules: [Navigation, Pagination],
    spaceBetween: 9,
    slidesPerView: 'auto',
    pagination:
      MOCK_LIST.length > 4 || (MOCK_LIST.length > 2 && isMobile)
        ? {
            clickable: true,
          }
        : false,
    navigation: {
      prevEl: '#swiper-prev-products',
      nextEl: '#swiper-next-products',
    },
    breakpoints: {
      480: {
        spaceBetween: 32,
      },
    },
  }
  return (
    <section className={clsx('container', s.products)}>
      <h2 className="title-indent">Догляд</h2>

      <div
        className={clsx(s.products_wrapper, {
          [s.pagination]: MOCK_LIST.length > 4,
        })}
      >
        <Swiper {...swiperParams} className={s.products_list}>
          {MOCK_LIST.map((_, i) => (
            <SwiperSlide key={i} className={s.products_item}>
              <div
                className={clsx(s.products_media, {
                  [s.bg]: !!MOCK_ITEM.descr,
                })}
              >
                <Image
                  src={MOCK_ITEM.pic + `?${i}`}
                  alt={MOCK_ITEM.title}
                  fill
                  sizes="(max-width: 739.98px) 167px, 283px"
                  className={s.products_pic}
                />
              </div>

              <span className={s.products_title}>{MOCK_ITEM.title}</span>
              <span className={s.products_label}>{MOCK_ITEM.label}</span>

              {MOCK_ITEM.descr && (
                <Popup
                  variant="product"
                  triger={
                    <button
                      type="button"
                      className={clsx('btn btn--secondary', s.products_btn)}
                    >
                      Детальніше
                    </button>
                  }
                >
                  <ProductMore
                    title={MOCK_ITEM.title}
                    label={MOCK_ITEM.label}
                    pic={MOCK_ITEM.pic + `?${i}`}
                    descr={MOCK_ITEM.descr}
                  />
                </Popup>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperArrowButton
          type="prev"
          variant="products"
          withPagination
          hidden={isMobile || MOCK_LIST.length < 5}
        />
        <SwiperArrowButton
          type="next"
          variant="products"
          withPagination
          hidden={isMobile || MOCK_LIST.length < 5}
        />
      </div>
    </section>
  )
}

export default Products
