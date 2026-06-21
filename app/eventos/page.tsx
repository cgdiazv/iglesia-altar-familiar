"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  title: string;
  time: string;
  location: string;
  category: string;
  color: string;
}

export default function EventosPage() {
  // Base de datos de eventos semanales fijos mapeados por el nombre del día
  const weeklyEvents: { [key: string]: Event[] } = {
    'Domingo': [
      { title: 'Reunión General', time: '3:00 p.m.', location: 'Auditorio Principal', category: 'Servicio Principal', color: 'bg-primary-gold/15 text-slate-900 border-primary-gold/30' }
    ],
    'Martes': [
      { title: 'Reunión de Oración', time: '8:00 p.m.', location: 'Sala de Intercesión', category: 'Oración', color: 'bg-blue-50 text-blue-900 border-blue-200' }
    ],
    'Jueves': [
      { title: 'Estudio Bíblico', time: '8:00 p.m.', location: 'Auditorio Principal', category: 'Enseñanza', color: 'bg-purple-50 text-purple-900 border-purple-200' }
    ]
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Cálculos de estructura del calendario
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const getDayName = (date: Date): string => {
    return date.toLocaleDateString('es-ES', { weekday: 'long' })
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const activeEventsForSelected = weeklyEvents[getDayName(selectedDate)] || [];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Encabezado */}
        <section className="bg-slate-50 py-12 border-b border-slate-100 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-2">
            <h1 className="text-base font-bold text-primary-gold uppercase tracking-widest flex items-center justify-center gap-2">
              <CalendarIcon className="w-4 h-4" /> Actividades
            </h1>
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Calendario de Eventos
            </p>
            <div className="w-12 h-1 bg-primary-gold mx-auto mt-4 rounded-full" />
          </div>
        </section>

        {/* Bloque del Calendario Grid de 2 Columnas */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Columna Izquierda: El Calendario Interactivo */}
            <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
              
              {/* Controles de Navegación del Mes */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  {months[month]} <span className="text-slate-400 font-normal">{year}</span>
                </h2>
                <div className="flex items-center space-x-2">
                  <button onClick={handlePrevMonth} className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100 text-slate-600 transition cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={handleNextMonth} className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100 text-slate-600 transition cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Encabezados de días de la semana */}
              <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {daysOfWeek.map((day, i) => (
                  <div key={i} className="py-2">{day}</div>
                ))}
              </div>

              {/* Matriz de Días del Mes */}
              <div className="grid grid-cols-7 gap-1">
                {/* Espacios vacíos para cuadrar el primer día del mes */}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square bg-slate-50/40 rounded-xl" />
                ))}

                {/* Pintar los días reales */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNumber = i + 1;
                  const thisDate = new Date(year, month, dayNumber);
                  const dayName = getDayName(thisDate);
                  const hasEvents = !!weeklyEvents[dayName];
                  
                  const isSelected = selectedDate.getDate() === dayNumber && 
                                     selectedDate.getMonth() === month && 
                                     selectedDate.getFullYear() === year;

                  return (
                    <button
                      key={dayNumber}
                      onClick={() => setSelectedDate(thisDate)}
                      className={`relative aspect-square rounded-xl flex flex-col items-center justify-center font-semibold text-sm transition group cursor-pointer
                        ${isSelected 
                          ? 'bg-slate-950 text-white shadow-md' 
                          : 'hover:bg-slate-50 text-slate-800'
                        }
                      `}
                    >
                      <span>{dayNumber}</span>
                      
                      {/* Indicador de evento debajo del número */}
                      {hasEvents && (
                        <span className={`w-1.5 h-1.5 rounded-full absolute bottom-2 
                          ${isSelected ? 'bg-primary-gold' : 'bg-primary-gold animate-pulse'}
                        `} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Columna Derecha: Detalle del Día Seleccionado */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Día Seleccionado</p>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
                </h3>
              </div>

              <div className="space-y-3">
                {activeEventsForSelected.length > 0 ? (
                  activeEventsForSelected.map((event, idx) => (
                    <div 
                      key={idx} 
                      className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 flex flex-col justify-between ${event.color}`}
                    >
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/60 border border-black/5 mb-3">
                          {event.category}
                        </span>
                        <h4 className="text-lg font-bold tracking-tight">{event.title}</h4>
                      </div>

                      <div className="mt-5 space-y-2 border-t border-black/5 pt-3 text-xs font-medium opacity-80">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-8 bg-white border border-dashed border-slate-200 rounded-2xl text-slate-400">
                    <p className="text-sm">No hay actividades especiales programadas para este día.</p>
                    <p className="text-xs mt-1">Nuestras reuniones generales toman lugar los días Domingo, Martes y Jueves.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}