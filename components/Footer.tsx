import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Estructura de 3 Columnas principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          
          {/* Columna 1: Info e Identidad */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                Iglesia <span className="text-primary-gold">Altar Familiar</span>
              </p>
              <p className="text-xs text-gray-500 italic mt-0.5">
                Transformando vidas con la presencia de Dios
              </p>
            </div>
            <div className="text-xs text-gray-400 leading-relaxed space-y-1">
              <p className="block">17703 W. Little York Rd., Houston, TX 77084</p>
              <p className="block text-primary-gold font-semibold">(281) 830-8067</p>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos Sincronizados */}
          <div className="flex flex-col items-center justify-center space-y-3 h-full md:pt-2">
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium">
              <Link href="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link>
              <Link href="/oracion" className="hover:text-white transition-colors">Oración</Link>
              <Link href="/eventos" className="hover:text-white transition-colors">Eventos</Link>
              <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
            </div>
          </div>

          {/* Columna 3: Iconos Sociales */}
          <div className="flex flex-col items-center md:items-end space-y-3 md:pt-1">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Síguenos</p>
            <div className="flex items-center space-x-3">
              {/* Facebook */}
              <a href="https://facebook.com/somosiglesiaaltarfamiliar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-gold hover:text-slate-950 transition-all duration-200" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13a5 5 0 0 0-5 5v2z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/somosaltarfamiliar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-gold hover:text-slate-950 transition-all duration-200" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-gold hover:text-slate-950 transition-all duration-200" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1.1-1.1-2-2.2-2.3C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.4C1.6 4.2.8 5.1.5 6.2.1 8.2.1 12 .1 12s0 3.8.4 5.8c.3 1.1 1.1 2 2.2 2.3 2 1 9.3 1 

              </a>
            </div>
          </div>

        </div>

        {/* Separador */}
        <hr className="border-white/5" />

        {/* Fila Inferior: Copyright e Indeva */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 text-center sm:text-left">
          <div><p>&copy; {currentYear} Iglesia Altar Familiar. Todos los derechos reservados.</p></div>
          <div>
            <p>Desarrollado por{' '}
              <a href="https://indevasa.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-gold font-medium transition-colors underline decoration-white/10 hover:decoration-primary-gold/40">
                Indeva Websites
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}