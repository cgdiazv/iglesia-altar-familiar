import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function QuienesSomosPage() {
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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* Encabezado Principal / Hero de la Página */}
        <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-base font-bold text-primary-gold uppercase tracking-widest">
              Conócenos Más
            </h1>
            <p className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Quiénes Somos
            </p>
            <div className="w-16 h-1 bg-primary-gold mx-auto mt-5 rounded-full" />
          </div>
        </section>

        {/* Sección 1: Nuestra Historia, Enfoque y Foto Grande Pastoral */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Foto de los Pastores - Formato Grande Editorial */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 group">
                <Image
                  src="/pastores.webp"
                  alt="Pastores Wilmer y Elena Hercules"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xl font-bold">Wilmer y Elena Hercules</p>
                  <p className="text-xs text-primary-gold uppercase tracking-wider font-semibold mt-0.5">Pastores Principales</p>
                </div>
              </div>
            </div>

            {/* Texto de Identidad y Pilares */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Una familia unida por su amor y su gracia
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  En la <strong>Iglesia Altar Familiar</strong> no nos fijamos en tu pasado, sino en el futuro que Dios tiene preparado para ti. Somos una comunidad vibrante donde nos reunimos semanalmente en un entorno cálido, cercano y lleno de fe para crecer juntos.
                </p>
              </div>

              {/* Pilares Reutilizados */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Nuestros Pilares Fundamentales
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex space-x-4">
                      <span className="text-primary-gold font-mono font-bold">0{idx + 1}.</span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Sección 2: Misión y Visión (Basado exactamente en image_09a475.png) */}
        <section className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Bloque Misión */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Nuestra Misión</h3>
              <div className="w-8 h-0.5 bg-slate-300 mx-auto" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Alcanzando familias a través del amor de Cristo, fortaleciendo el núcleo original de Dios para la familia a través de la Palabra de Dios y nuestra fe en nuestro Señor Jesucristo como el unico camino la verdad y la vida. <strong className="text-slate-900 block mt-2 font-semibold">Juan 14:5-6</strong>
              </p>
            </div>

            {/* Bloque Visión */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Nuestra Visión</h3>
              <div className="w-8 h-0.5 bg-slate-300 mx-auto" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Familias establecidas, fortalecidas en su fe, viviendo una vida con paz y seguridad en medio de cualquier circunstancia. <strong className="text-slate-900 block mt-2 font-semibold">Juan 14:26-27</strong>
              </p>
            </div>

          </div>
        </section>

        {/* Sección 3: Nuestras Creencias Doctrina (Basado exactamente en image_09a475.png) */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
            Nuestras Creencias
          </h3>
          <div className="w-8 h-0.5 bg-slate-300 mx-auto" />
          
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 text-justify sm:text-center font-normal">
            <p>
              Creemos en la trinidad, que Dios es uno en tres personas: Dios padre, Dios hijo, Dios Espíritu Santo. Dios hijo, Jesucristo quién fue enviado por el Padre Dios, que nació del vientre de una virgen mujer &ldquo;María&rdquo;.
            </p>
            <p>
              Jesucristo fue 100% hombre y 100% divino en esta tierra, quien no tenía pecados y era la perfecta ofrenda de amor para nuestra redención, muriendo crucificado y fue resucitado por el poder de Dios a través del espíritu de resurrección al tercer día de haber muerto y después de unos días ascendió a los cielos y está sentado a la derecha de nuestro Padre Dios e intercede delante del padre por nosotros. Jesucristo vive en el corazón de todo verdadero cristiano quien ha creído y le ha recibido a él como su único salvador.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}