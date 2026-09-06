import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
  title: 'Udara Sandesha | Software Engineer',
  description:
    'Software engineer in Linz, Austria. Building reliable .NET applications, scalable APIs, and cloud infrastructure. Explore my experience, work, and recommendations.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
