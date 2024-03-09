'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import clsx from 'clsx'
import s from './Header.module.scss'

const BTN_MOCK = {
  title: 'Запис',
  link: 'https://b490296.alteg.io/company/464036',
}

const BtnCta = ({ data, handleClose, className }) => (
  <a
    href={data.link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={handleClose ? handleClose : null}
    className={clsx('btn btn--primary', s.header_btn, className)}
  >
    {data.title}
  </a>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState)
    document.body.style.overflow = isMenuOpen ? '' : 'hidden'
  }

  const handleClose = () => {
    if (window.innerWidth >= 1200) return
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1200 && isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen, handleResize])

  return (
    <header className={clsx('container', s.header)}>
      <Logo variant="header" isPriority />

      <nav className={clsx(s.header_nav, { [s.show]: isMenuOpen })}>
        <Menu variant="header" handleClose={handleClose} />

        <BtnCta
          data={BTN_MOCK}
          className={s.mobile}
          handleClose={handleClose}
        />
      </nav>

      <BtnCta data={BTN_MOCK} className={s.desktop} />

      <button
        tyoe="button"
        aria-label="Menu"
        onClick={handleToggle}
        className={clsx(s.header_hamb, { [s.active]: isMenuOpen })}
      >
        <span className={s.header_hamb_icon} />
      </button>
    </header>
  )
}

export default Header
