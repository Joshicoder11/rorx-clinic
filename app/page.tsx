import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import Services from '@/components/Services';
import About from '@/components/About';
import Doctors from '@/components/Doctors';
import Appointment from '@/components/Appointment';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <ImageSlider />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Appointment />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
