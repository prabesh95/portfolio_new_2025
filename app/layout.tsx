import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alex Johnson - Full-Stack Developer & Designer',
  description: 'Premium portfolio of Alex Johnson, a full-stack developer and designer crafting exceptional digital experiences.',
  keywords: 'full-stack developer, designer, portfolio, web development, UI/UX',
  authors: [{ name: 'Alex Johnson' }],
  openGraph: {
    title: 'Alex Johnson - Full-Stack Developer & Designer',
    description: 'Premium portfolio showcasing exceptional digital experiences',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}