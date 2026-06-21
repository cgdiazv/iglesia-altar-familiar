import Link from 'next/link';
import Image from 'next/image';

export default function PrayerSection() {
  return (
    <section id="oracion" className="w-full bg-[#222222] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Caja de Oración con Imagen de Fondo `prayer.webp` */}
        <div className="relative w-full max-w-[280px] aspect-square bg-primary-gold flex flex-col items-center justify-center p-6 rounded-lg overflow-hidden group shadow-lg shrink-0">
          
          {/* Imagen de Fondo del Bloque */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/prayer.webp"
              alt="Fondo de oración"
              fill
              className="object-cover object-center opacity-40 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            {/* Capa de tinte adicional opcional para ajustar contraste */}
            <div className="absolute inset-0 bg-primary-gold/10 mix-blend-color" />
          </div>
          
          {/* Texto sobrepuesto */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
            <span className="text-2xl font-black tracking-wider uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-none">
              Pide
            </span>
            <span className="text-4xl font-black tracking-tight uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] leading-none mt-1">
              Oración
            </span>
          </div>
        </div>

        {/* Contenido Informativo y Botón de Acción a la Derecha */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-sm font-bold text-primary-gold uppercase tracking-widest">
            Necesitas Oración
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Estamos aquí para orar contigo. Comparte tus necesidades o alabanzas, y nuestro equipo las elevará con fe, confiando en el plan perfecto de Dios para tu vida.
          </p>

          <div className="pt-2">
            <Link 
              href="#contacto" 
              className="inline-flex items-center space-x-2 font-bold tracking-wide uppercase text-xs sm:text-sm text-white hover:text-primary-gold transition-colors duration-200 border-b-2 border-white/20 hover:border-primary-gold pb-1"
            >
              <span>Enviar una solicitud de oración</span>
              <span className="text-base font-sans">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}