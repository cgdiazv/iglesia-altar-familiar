"use client";

import { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un problema al enviar tu mensaje.');
      }

      setStatus({ type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Limpia campos
    } catch (error: any) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'No se pudo procesar tu mensaje. Intenta de nuevo.' 
      });
    }
  };

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

            {/* Mensajes de feedback */}
            {status.type === 'success' && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-start space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">¡Mensaje enviado con éxito!</p>
                  <p className="text-emerald-700 mt-0.5">Gracias por comunicarte con nosotros. Nos pondremos en contacto contigo lo antes posible.</p>
                </div>
              </div>
            )}

            {status.type === 'error' && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl flex items-start space-x-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Error al procesar</p>
                  <p className="text-rose-700 mt-0.5">{status.message}</p>
                </div>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nombre *</label>
                  <input 
                    type="text" 
                    required
                    disabled={status.type === 'loading'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60" 
                    placeholder="Tu nombre" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Correo Electrónico *</label>
                  <input 
                    type="email" 
                    required
                    disabled={status.type === 'loading'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60" 
                    placeholder="correo@ejemplo.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Asunto *</label>
                <input 
                  type="text" 
                  required
                  disabled={status.type === 'loading'}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60" 
                  placeholder="Asunto de tu mensaje" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mensaje *</label>
                <textarea 
                  rows={4} 
                  required
                  disabled={status.type === 'loading'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition resize-none disabled:opacity-60" 
                  placeholder="Escribe aquí tu mensaje..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status.type === 'loading'}
                className="w-full sm:w-auto bg-primary-gold text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-primary-gold-hover transition shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                <Send className={`w-4 h-4 ${status.type === 'loading' ? 'animate-pulse' : ''}`} />
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