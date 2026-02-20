import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Institut from './components/Institut'
import Tarifs from './components/Tarifs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Institut />
        <Tarifs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
