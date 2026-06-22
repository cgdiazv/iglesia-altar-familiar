import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Comunidad Familiar',
      desc: 'Creemos que la iglesia es una familia donde cada persona importa, encuentra pertenencia y camina acompañada.'
    },
    {
      title: 'Centrados en la Palabra',
      desc: 'Nuestra guía e inspiración provienen de las Escrituras, aplicadas de forma práctica y transformadora para el día a día.'
    },
    {
      title: 'Presencia de Dios',
      desc: 'Buscamos espacios de adoración auténtica donde su Espíritu transforme vidas, restaure corazones y traiga paz.'
    }
  ];

  return (
    <section id="quienes-somos" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bloque Izquierdo: Mensaje de Identidad e Imagen Pastoral */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-primary-gold uppercase tracking-widest">
                Nuestra Identidad
              </h2>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Una familia unida por su amor y su gracia
              </p>
            </div>
            
            <p className="text-base text-slate-600 leading-relaxed">
              En la <strong>Iglesia Altar Familiar</strong> no nos fijamos en tu pasado, sino en el futuro que Dios tiene preparado para ti. Somos una comunidad vibrante donde nos reunimos semanalmente en un entorno cálido, cercano y lleno de fe para crecer juntos.
            </p>
            
            {/* Tarjeta de Liderazgo con la foto pastores.webp */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-4 shadow-sm group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-primary-gold/30 group-hover:border-primary-gold transition-colors duration-300">
                <Image
                  src="/pastores.webp"
                  alt="Pastores Wilmer y María Elena Hércules"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Liderazgo de la Comunidad</p>
                <p className="text-base font-bold text-slate-800">Wilmer y María Elena Hércules</p>
                <p className="text-xs text-gray-500">Pastores Principales</p>
              </div>
            </div>
          </div>

          {/* Bloque Derecho: Pilares Fundamentales */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 lg:hidden">
              Nuestros Pilares
            </h3>
            
            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100/80 hover:bg-white hover:border-primary-gold/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex space-x-4">
                    <div className="text-primary-gold font-mono font-bold text-lg select-none">
                      0{idx + 1}.
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}