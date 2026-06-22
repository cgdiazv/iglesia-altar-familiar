"use client"; // <-- Esencial para manejar el estado del drawer interactivo

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Users, Heart, Calendar, Mail, HeartHandshake } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Array de navegación centralizado para consistencia entre escritorio y móvil
  const navLinks = [
    { href: '/quienes-somos', label: 'Quiénes Somos', icon: Users },
    { href: '/oracion', label: 'Oración', icon: Heart },
    { href: '/eventos', label: 'Eventos', icon: Calendar },
    { href: '/contacto', label: 'Contacto', icon: Mail },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          {/* Branding: Logo */}
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

          {/* Menú de Escritorio (Oculto en móviles) */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-gold transition-colors">
                {link.label}
              </Link>
            ))}
            <a 
              href="https://iglesiaaltarfamiliar.churchcenter.com/giving" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary-gold text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-gold-hover transition-colors shadow-sm flex items-center"
            >
              Donar
            </a>
          </nav>

          {/* Botón de Hamburguesa Móvil */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-600 hover:text-primary-gold transition-colors focus:outline-none"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ==================== MOBILE DRAWER ==================== */}
      {/* Fondo traslúcido oscuro (Overlay) */}
      <div 
        onClick={toggleMenu}
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel Lateral (Drawer) */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 md:hidden shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-8">
          {/* Encabezado del Drawer */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="font-bold text-sm text-slate-900 tracking-wider uppercase">
              Menú <span className="text-primary-gold">Navegación</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="p-1.5 text-slate-400 hover:text-primary-gold hover:bg-slate-50 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Enlaces con Iconos */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Cierra el drawer al hacer clic
                  className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition font-medium text-sm group"
                >
                  <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-primary-gold transition-colors" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Botón de Donar fijo en la parte inferior del Drawer */}
        <div className="border-t border-slate-100 pt-6">
          <a 
            href="https://iglesiaaltarfamiliar.churchcenter.com/giving" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full bg-primary-gold text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:bg-primary-gold-hover transition-colors flex items-center justify-center space-x-2"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Donar con Church Center</span>
          </a>
        </div>
      </aside>
    </>
  );
}