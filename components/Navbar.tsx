import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Branding: Solo el Logo Redimensionado */}
        <Link href="/" className="flex flex-col justify-center h-full py-2">
          <div className="relative w-[240px] h-[56px] sm:w-[280px] sm:h-[64px]">
            <Image
              src="/logo.webp"
              alt="Logo Iglesia Altar Familiar"
              fill
              className="object-contain object-left"
              priority 
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <Link href="#quienes-somos" className="hover:text-primary-gold transition-colors">Quiénes Somos</Link>
          <Link href="#horarios" className="hover:text-primary-gold transition-colors">Horarios</Link>
          <Link href="#oracion" className="hover:text-primary-gold transition-colors">Oración</Link>
          <Link href="#contacto" className="hover:text-primary-gold transition-colors">Contacto</Link>
          <Link 
            href="#contacto" 
            className="bg-primary-gold text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary-gold-hover transition-colors shadow-sm flex items-center"
          >
            Contáctenos
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-600 hover:text-primary-gold transition-colors" aria-label="Menú">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}