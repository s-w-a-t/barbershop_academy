import React from 'react'
import clsx from 'clsx'
import s from './CTA.module.scss'

const CTA = () => {
  return (
    <section className={clsx('container', s.cta)}>
      <h2 className={clsx('h2', s.cta_title)}>Напиши босу</h2>

      <p className={s.cta_descr}>
        Ми прагнемо до довгострокових відносин з нашими гостями, друзями та
        партнерами. Щоб наш сервіс став ще кращим, а стосунки стали міцнішими,
        ми цінуємо ваші відгуки та побажання. Будь ласка, пишіть мені особисто,
        якщо у вас виникли зауваження або пропозиції щодо роботи Brutal. Ваша
        інформація буде збережена в конфіденційності.
      </p>

      <a
        href="mailto:bbrutalbarbershop@gmail.com"
        className={clsx('btn btn--secondary', s.cta_btn)}
      >
        Написати
      </a>
    </section>
  )
}

export default CTA
