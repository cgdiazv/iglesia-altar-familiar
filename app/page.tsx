import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import PrayerSection from '@/components/PrayerSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection'; // <-- Importación añadida
import Footer from '@/components/Footer';                 // <-- Importación añadida

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ScheduleSection />
        <PrayerSection />
        <AboutSection />
        <ContactSection /> {/* <-- Sección de Contacto colocada */}
      </main>
      <Footer /> {/* <-- Cierre estructural con el Footer */}
    </div>
  );
}