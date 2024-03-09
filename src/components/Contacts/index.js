import React from 'react'
import clsx from 'clsx'
import Socials from '../Socials'
import s from './Contacts.module.scss'

const Contacts = () => {
  return (
    <section id="contacts" className={clsx('container', s.contacts)}>
      <h2 className={s.contacts_title}>Наша адреса</h2>

      <Socials variant="contacts" className={s.contacts_socials} />

      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2637.4571217040266!2d22.29514!3d48.620234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739193072cc7437%3A0xf3460b13c4a0837d!2sBrutal%20Barbershop!5e0!3m2!1sen!2spl!4v1709993804257!5m2!1sen!2spl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={s.contacts_map}
      />
    </section>
  )
}

export default Contacts
