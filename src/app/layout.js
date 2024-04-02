import './globals.scss'
import { Montserrat, Rubik } from 'next/font/google'
import clsx from 'clsx'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Lines from '@/components/Lines'

const rubik = Rubik({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
})

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Brutal Barbershop',
  description:
    'Brutal barbershop - це більш, ніж просто чоловіча перукарня. Місце, де вас проведуть за ручку до неповторного стилю за допомогою пари ножиць та машинки.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="uk">
      <body className={clsx(rubik.variable, montserrat.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Lines />
      </body>
    </html>
  )
}

export default RootLayout
