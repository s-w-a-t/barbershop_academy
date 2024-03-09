import React from 'react'
import Image from 'next/image'
import s from './ProductMore.module.scss'

const MOCK_FOOTNOTE = 'Для замовлення зв’яжіться з своїм барбером'

const ProductMore = ({ title, label, pic, descr }) => {
  return (
    <div className={s.productMore}>
      <span className={s.productMore_title}>{title}</span>

      <span className={s.productMore_label}>{label}</span>

      <Image
        src={pic}
        alt={title}
        width={220}
        height={313}
        className={s.productMore_pic}
      />

      <p className={s.productMore_descr}>{descr}</p>

      <p className={s.productMore_footnote}>{MOCK_FOOTNOTE}</p>
    </div>
  )
}

export default ProductMore
