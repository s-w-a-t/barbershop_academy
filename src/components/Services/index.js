'use client'
import React from 'react'
import clsx from 'clsx'
import useMatchMedia from '@/hooks/useMatchMedia'
import * as Accordion from '@radix-ui/react-accordion'
import s from './Services.module.scss'

const MOCK = [
  {
    name: 'Стрижка',
    price1: '350',
    price2: '400',
    price3: '500',
  },
  {
    name: 'Стрижка під насадку (до 6мм)',
    price1: '300',
    price2: '350',
    price3: '400',
  },
  {
    name: 'Стрижка + борода',
    price1: '550',
    price2: '650',
    price3: '750',
  },
  {
    name: 'Корекція бороди',
    price1: '250',
    price2: '300',
    price3: '350',
  },
  {
    name: 'Стрижка під нуль',
    price1: '200',
    price2: '250',
    price3: '300',
  },
  {
    name: 'Королівське гоління',
    price1: '250',
    price2: '350',
    price3: '400',
  },
  {
    name: 'Камуфлювання сивини',
    price1: '300',
    price2: '350',
    price3: '400',
  },
  {
    name: 'Воскове видалення',
    price1: '100',
    price2: '100',
    price3: '100',
  },
]

const MOCK_LEVELS = {
  base: 'Барбер',
  upper: 'Старший барбер',
  top: 'Топ барбер',
}

const Services = () => {
  const isDesktop = useMatchMedia('(min-width: 1200px)')
  return (
    <section id="services" className={clsx('container', s.services)}>
      <h2 className="title-indent">Послуги</h2>

      <Accordion.Root type="single" collapsible className={s.services_list}>
        {MOCK.map(({ name, price1, price2, price3 }, i) => (
          <Accordion.Item
            disabled={isDesktop}
            key={name + i}
            value={name + i}
            className={s.services_item}
          >
            <Accordion.Trigger className={s.services_name}>
              {name}
            </Accordion.Trigger>

            <Accordion.Content
              forceMount={isDesktop}
              className={s.services_price}
            >
              <div
                data-label={MOCK_LEVELS.base}
                className={s.services_price_item}
              >
                <span className={s.services_price_value}>{price1} грн</span>
              </div>
              <div
                data-label={MOCK_LEVELS.upper}
                className={s.services_price_item}
              >
                <span className={s.services_price_value}>{price2} грн</span>
              </div>
              <div
                data-label={MOCK_LEVELS.top}
                className={s.services_price_item}
              >
                <span className={s.services_price_value}>{price3} грн</span>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}

export default Services
