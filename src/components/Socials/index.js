import React from 'react'
import Instagram from '@/assets/icons/instagram.svg'
import Telegram from '@/assets/icons/telegram.svg'
import clsx from 'clsx'
import s from './Socials.module.scss'

const DATA = [
  {
    name: 'Instagram ',
    Icon: Instagram,
    link: 'https://instagram.com/brutal.barbershop.uzh?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Telegram',
    Icon: Telegram,
    link: '#',
  },
]

const Socials = ({ variant, className }) => {
  return (
    <ul className={clsx(s.socials, { [s[variant]]: variant }, className)}>
      {DATA.map(({ name, Icon, link }) => (
        <li key={link}>
          <a href={link} aria-label={name} className={s.socials_link}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
