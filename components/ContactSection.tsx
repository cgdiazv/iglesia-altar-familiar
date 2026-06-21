"use client";

import { MapPin, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Formulario */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Escríbenos</h3>
              <p className="text-sm text-slate-500 mt-1">¿Tienes alguna duda, petición de oración o simplemente quieres saludar? Déjanos tu mensaje.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nombre</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Correo Electrónico</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition" placeholder="correo@ejemplo.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Asunto</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition" placeholder="Asunto" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mensaje</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition resize-none" placeholder="Escribe aquí tu mensaje..."></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto bg-primary-gold text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-primary-gold-hover transition shadow-sm flex items-center justify-center space-x-2">
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Info Lateral */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:py-4">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-primary-gold uppercase tracking-widest">Conéctate</h2>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Estamos listos para recibirte</p>
              <p className="text-base text-slate-500 leading-relaxed">
                Nuestra comunidad se reúne semanalmente en un ambiente diseñado para toda la familia. Si es tu primera vez visitándonos, no dudes en escribirnos para guiarte en tu llegada.
              </p>
            </div>

            <div className="space-y-6 border-t border-slate-200 pt-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary-gold/10 text-primary-gold rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Nuestra Ubicación</h4>
                  <p className="text-sm text-slate-500 mt-0.5">Visítanos en nuestras reuniones semanales. Pregunta por nuestros accesos principales.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary-gold/10 text-primary-gold rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Correo Electrónico</h4>
                  <p className="text-sm text-slate-500 mt-0.5">info@iglesiaaltarfamiliar.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}