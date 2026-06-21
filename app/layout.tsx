import './globals.css'; // <-- Double check that this import exists!
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iglesia Altar Familiar',
  description: 'Transformando vidas con la presencia de Dios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}