import Hero from '@/components/Hero'
import About from '@/components/About'
import School from '@/components/School'
import Gallery from '@/components/Gallery'
import Services from '@/components/Services'
import Barbers from '@/components/Barbers'
import Contacts from '@/components/Contacts'
import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'

async function getReviewsData() {
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.NEXT_PLACE_ID}&fields=reviews&reviews_no_translations=true&key=${process.env.NEXT_GOOGLE_API_KEY}`

  const res = await fetch(apiUrl)

  if (!res.ok) {
    throw new Error('Failed to fetch reviews data')
  }

  const data = await res.json()

  return data?.result?.reviews || []
}

const Home = async () => {
  const reviews = await getReviewsData()

  return (
    <>
      <Hero />
      <About />
      <School />
      <Gallery />
      <Services />
      <Barbers />
      <Contacts />
      <Products />
      {!!reviews.length && <Reviews list={reviews} />}
      <CTA />
    </>
  )
}

export default Home
