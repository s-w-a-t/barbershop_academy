import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import logo from '@/assets/img/logo.svg?url'
import s from './Logo.module.scss'

const Logo = ({ variant, isPriority }) => {
  return (
    <Image
      width={74}
      height={100}
      src={logo}
      alt="Brutal Barbershop"
      priority={isPriority}
      className={clsx(s.logo, { [s[variant]]: variant })}
    />
  )
}

export default Logo
