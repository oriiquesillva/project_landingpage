
import Contact from '@/components/contact/contact'
import Feature from '@/components/feature/feature'
import Header from '@/components/header/header'
import Welcome from '@/components/welcome/welcome'

export default function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Feature/>
      <Contact/>
    </div>
  )
}
