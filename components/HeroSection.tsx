import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Full Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/header02.webp" 
          alt="Iglesia Altar Familiar Fondo"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Capa de contraste oscuro */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
      </div>

      {/* Contenido del Hero Centrado */}
      <div className="relative z-10 w-full max-w-3xl text-center text-white space-y-6 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl drop-shadow-md">
          Bienvenidos a la <br />
          <span className="text-primary-gold block mt-2 drop-shadow-sm">Iglesia Altar Familiar</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Transformando vidas con la presencia de Dios. Te invitamos a formar parte de nuestra comunidad y caminar juntos en fe.
        </p>

        <div className="pt-4">
          <Link 
            href="#horarios" 
            className="inline-flex items-center bg-primary-gold text-slate-950 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base tracking-wide hover:bg-primary-gold-hover hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary-gold/20"
          >
            Ver Horarios de Servicio
          </Link>
        </div>
      </div>

    </section>
  );
}