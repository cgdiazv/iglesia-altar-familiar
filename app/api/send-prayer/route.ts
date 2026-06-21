import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Validamos la existencia de la API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: 'La API key de Resend no está configurada en el servidor.' },
      { status: 500 }
    );
  }

  try {
    const { name, phone, email, request: prayerRequest } = await request.json();

    // Validaciones básicas de campos requeridos
    if (!name || !prayerRequest) {
      return NextResponse.json(
        { error: 'El nombre y la petición de oración son obligatorios.' },
        { status: 400 }
      );
    }

    // Envío del correo estructurado
    const data = await resend.emails.send({
      from: 'Iglesia Altar Familiar <notifications@indevasa.com>',
      to: ['info@iglesiaaltarfamiliar.org'],
      subject: `Nueva Petición de Oración: ${name}`,
      replyTo: email || undefined,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; rounded: 8px;">
          <h2 style="color: #222222; border-bottom: 2px solid #F2AD07; padding-bottom: 10px;">Nueva Solicitud de Oración</h2>
          <p style="margin: 15px 0;"><strong>Nombre del solicitante:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
          <p style="margin: 15px 0;"><strong>Correo Electrónico:</strong> ${email || 'No especificado'}</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #F2AD07; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #555555;">Petición:</p>
            <p style="margin: 10px 0 0 0; line-height: 1.6; color: #333333; white-space: pre-line;">${prayerRequest}</p>
          </div>
          
          <footer style="margin-top: 30px; font-size: 11px; color: #999999; text-align: center;">
            Este es un mensaje automático enviado desde el formulario de Oración de la Iglesia Altar Familiar.
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error interno del servidor' }, { status: 500 });
  }
}