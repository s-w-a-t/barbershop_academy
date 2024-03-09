'use client'

import React from 'react'
import clsx from 'clsx'
import Logo from '../Logo'
import Menu from '../Menu'
import Socials from '../Socials'
import s from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={clsx('container', s.footer)}>
      <Logo variant="footer" />

      <Socials variant="footer" />

      <Menu variant="footer" />

      <p className={s.footer_copy}>
        © {currentYear} Brutal Barbershop. Всі права застережено
      </p>
    </footer>
  )
}

export default Footer
