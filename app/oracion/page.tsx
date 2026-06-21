"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, Heart, CheckCircle2, AlertCircle } from 'lucide-react';

export default function OracionPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    request: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/send-prayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un problema al enviar tu solicitud.');
      }

      setStatus({ type: 'success' });
      setFormData({ name: '', phone: '', email: '', request: '' }); // Limpia el formulario
    } catch (error: any) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'No se pudo conectar con el servicio. Por favor, intenta más tarde.' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Banner de Encabezado */}
        <section className="bg-slate-50 py-16 border-b border-slate-100 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-2">
            <h1 className="text-base font-bold text-primary-gold uppercase tracking-widest flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 fill-current" /> Intercesión
            </h1>
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Petición de Oración
            </p>
            <div className="w-12 h-1 bg-primary-gold mx-auto mt-4 rounded-full" />
            <p className="text-base text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
              No estás solo. Nuestro equipo pastoral y de intercesión se unirá a ti en fe para llevar tus cargas y agradecimientos delante del Señor.
            </p>
          </div>
        </section>

        {/* Sección del Formulario */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-md space-y-6">
            
            {/* Mensajes de Respuesta de la API */}
            {status.type === 'success' && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-start space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">¡Solicitud recibida con éxito!</p>
                  <p className="text-emerald-700 mt-0.5">Hemos recibido tus motivos de oración. Estaremos intercediendo por ti confiando en el favor de Dios.</p>
                </div>
              </div>
            )}

            {status.type === 'error' && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl flex items-start space-x-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Error al enviar</p>
                  <p className="text-rose-700 mt-0.5">{status.message}</p>
                </div>
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    disabled={status.type === 'loading'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60"
                    placeholder="Escribe tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Teléfono</label>
                  <input
                    type="tel"
                    disabled={status.type === 'loading'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  disabled={status.type === 'loading'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">¿Por qué motivo deseas que oremos? *</label>
                <textarea
                  rows={6}
                  required
                  disabled={status.type === 'loading'}
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition resize-none disabled:opacity-60"
                  placeholder="Describe aquí de manera libre tu necesidad o agradecimiento..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full sm:w-auto bg-primary-gold text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-primary-gold-hover transition shadow-sm flex items-center justify-center space-x-3 disabled:opacity-50 cursor-pointer"
                >
                  <span>{status.type === 'loading' ? 'Enviando petición...' : 'Enviar Solicitud'}</span>
                  <Send className={`w-4 h-4 ${status.type === 'loading' ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}