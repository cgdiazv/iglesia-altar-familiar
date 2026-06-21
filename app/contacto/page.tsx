"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactoPage() {
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      setStatus({ 
        type: 'error', 
        message: error.message || 'No se pudo procesar tu mensaje. Intenta de nuevo.' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Encabezado / Hero Banner */}
        <section className="bg-slate-50 py-16 border-b border-slate-100 text-center px-4">
          <div className="max-w-3xl mx-auto space-y-2">
            <h1 className="text-base font-bold text-primary-gold uppercase tracking-widest">
              Comunícate
            </h1>
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Ponte en Contacto
            </p>
            <div className="w-12 h-1 bg-primary-gold mx-auto mt-4 rounded-full" />
            <p className="text-base text-slate-500 max-w-lg mx-auto mt-4 leading-relaxed">
              ¿Tienes preguntas sobre nuestras reuniones, necesitas consejería o deseas coordinar una visita? Estamos listos para responderte.
            </p>
          </div>
        </section>

        {/* Sección de Bloques de Información y Formulario */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Tarjetas de Información a la Izquierda (4 Columnas) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-100/80 p-6 flex items-start space-x-4">
                <div className="p-3 bg-white text-primary-gold rounded-xl shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Nuestra Dirección</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    17703 W. Little York Rd., Houston, TX 77084
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100/80 p-6 flex items-start space-x-4">
                <div className="p-3 bg-white text-primary-gold rounded-xl shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Teléfono Local</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium hover:text-primary-gold transition-colors">
                    (281) 830-8067
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100/80 p-6 flex items-start space-x-4">
                <div className="p-3 bg-white text-primary-gold rounded-xl shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Correo Electrónico</h4>
                  <p className="text-sm text-slate-600 mt-1 hover:text-primary-gold transition-colors">
                    info@iglesiaaltarfamiliar.org
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100/80 p-6 flex items-start space-x-4">
                <div className="p-3 bg-white text-primary-gold rounded-xl shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Horario de Servicio</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Domingos a las 3:00 p.m.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario de Mensajería a la Derecha (7 Columnas) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-md space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Escríbenos Directamente</h3>
                <p className="text-sm text-slate-500 mt-1">Completa los campos y un miembro de nuestro equipo te responderá a la brevedad.</p>
              </div>

              {/* Alertas de Feedback */}
              {status.type === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">¡Mensaje enviado!</p>
                    <p className="text-emerald-700 mt-0.5">Tu mensaje fue entregado exitosamente. Gracias por ponerte en contacto con nosotros.</p>
                  </div>
                </div>
              )}

              {status.type === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl flex items-start space-x-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Error en el envío</p>
                    <p className="text-rose-700 mt-0.5">{status.message}</p>
                  </div>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tu Nombre *</label>
                    <input 
                      type="text" 
                      required
                      disabled={status.type === 'loading'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition disabled:opacity-60" 
                      placeholder="Nombre completo" 
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
                    placeholder="¿Cuál es el motivo de tu mensaje?" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mensaje *</label>
                  <textarea 
                    rows={5} 
                    required
                    disabled={status.type === 'loading'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-gold transition resize-none disabled:opacity-60" 
                    placeholder="Escribe aquí de forma detallada tus dudas o comentarios..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status.type === 'loading'}
                    className="w-full sm:w-auto bg-primary-gold text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-primary-gold-hover transition shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                    <Send className={`w-4 h-4 ${status.type === 'loading' ? 'animate-pulse' : ''}`} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}