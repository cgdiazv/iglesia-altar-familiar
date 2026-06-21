import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: 'La API key de Resend no está configurada en el servidor.' },
      { status: 500 }
    );
  }

  try {
    const { name, email, subject, message } = await request.json();

    // Validaciones básicas de campos obligatorios
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos marcados con asterisco (*) son obligatorios.' },
        { status: 400 }
      );
    }

    // Envío del correo con Resend
    const data = await resend.emails.send({
      from: 'Iglesia Altar Familiar <notifications@indevasa.com>',
      to: ['info@iglesiaaltarfamiliar.org'],
      subject: `Contacto Web: ${subject} (${name})`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
          <h2 style="color: #222222; border-bottom: 2px solid #F2AD07; padding-bottom: 10px; margin-top: 0;">Nuevo Mensaje de Contacto</h2>
          <p style="margin: 15px 0;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Correo Electrónico:</strong> ${email}</p>
          <p style="margin: 15px 0;"><strong>Asunto:</strong> ${subject}</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #F2AD07; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #555555;">Mensaje:</p>
            <p style="margin: 10px 0 0 0; line-height: 1.6; color: #333333; white-space: pre-line;">${message}</p>
          </div>
          
          <footer style="margin-top: 30px; font-size: 11px; color: #999999; text-align: center;">
            Este es un mensaje automático enviado desde el formulario de la sección de Contacto de la Iglesia Altar Familiar.
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}