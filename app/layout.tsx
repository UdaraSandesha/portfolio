import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
  title: 'Udara Sandesha | Software Engineer',
  description:
    'Software engineer in Linz, Austria. Building reliable .NET applications, scalable APIs, cloud infrastructure, and AI-powered systems with RAG and agentic workflows.',
};
export const viewport: Viewport = { themeColor: '#05070b' };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
