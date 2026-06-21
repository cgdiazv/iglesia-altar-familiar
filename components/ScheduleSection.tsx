export default function ScheduleSection() {
  const schedules = [
    { day: 'Domingo', time: '3:00 p.m.', type: 'Reunión General', desc: 'Acompáñanos en nuestro servicio principal de adoración y palabra.' },
    { day: 'Martes', time: '8:00 p.m.', type: 'Reunión de Oración', desc: 'Un espacio dedicado a buscar la presencia de Dios e interceder juntos.' },
    { day: 'Jueves', time: '8:00 p.m.', type: 'Estudio Bíblico', desc: 'Profundizamos en las Escrituras para aplicar la verdad de Dios a diario.' },
  ];

  return (
    <section id="horarios" className="w-full bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs font-bold text-primary-gold uppercase tracking-widest">
            Horarios de Reunión
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Cuándo nos reunimos
          </p>
          <div className="w-12 h-1 bg-primary-gold mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Tenemos un lugar reservado para ti. Ven con tu familia y comparte con nosotros en cualquiera de nuestros servicios semanales.
          </p>
        </div>

        {/* Cuadrícula de Horarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {schedules.map((schedule, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-gold/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-slate-900">{schedule.day}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-gold/10 text-slate-900 border border-primary-gold/20">
                    {schedule.time}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-primary-gold mb-2">{schedule.type}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{schedule.desc}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-50 group-hover:border-primary-gold/10 flex items-center text-xs font-medium text-slate-400 group-hover:text-primary-gold transition-colors duration-300">
                <span>Te esperamos &rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}