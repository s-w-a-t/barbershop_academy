'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Video from '../Video'
import Play from '@/assets/icons/play.svg'
import Popup from '../Popup'
import s from './School.module.scss'

const MOCK_LIST = Array.from({ length: 14 })

const School = () => {
  const [play, setPlay] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <section id="school" className={clsx('container', s.school)}>
      <h2 className={s.school_title}>Школа барберів</h2>

      <p className={s.school_descr}>
        Доглянутість - візитна картка кожного чоловіка. А якщо бути причетним до
        її створення і почати вже сьогодні? Стань нашим учнем та почни кар'єру
        професійного барбера. Навчимо поєднувати професіоналізм з творчістю та
        дисципліною. Зануримо вас в атмосферу барберінгу , де ви навчитесь
        дотримуватись високих стандартів та правил. Наш досвід у навчанні вже
        понад 4 роки. Допомогли почати карєру понад 50 барберам
      </p>

      <div className={s.school_media}>
        <Video
          url="https://www.youtube.com/watch?v=AXH1r0cyacU"
          light={'https://picsum.photos/1280/720.webp'}
          autoPlay
          playsInline
          playing
          muted
          controls
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          onEnded={() => setPlay(false)}
          onClickPreview={() => setActive(true)}
          playIcon={<Play />}
        />

        {!!MOCK_LIST.length && (
          <Popup
            variant="school"
            triger={
              <button
                className={clsx('btn btn--secondary', s.school_btn, {
                  [s.hidden]: play,
                  [s.active]: active,
                })}
              >
                Детальніше
              </button>
            }
          >
            <div className={clsx('container', s.school_gallery)}>
              {MOCK_LIST.map((_, i) => (
                <div key={i} className={s.school_ill}>
                  <Image
                    src={'https://picsum.photos/550/850.webp' + `?${i}`}
                    alt={'Image ' + (i + 1)}
                    fill
                    className={s.school_pic}
                  />
                </div>
              ))}
            </div>
          </Popup>
        )}
      </div>
    </section>
  )
}

export default School
