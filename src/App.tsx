import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import SlideLogos from './components/SlideLogos';

export default function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <SlideLogos />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}