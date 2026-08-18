import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xia Zhang - Product Designer',
  description: 'Product Design & Shopify Development Portfolio',
  openGraph: {
    title: 'Xia Zhang - Product Designer',
    description: 'Product Design & Shopify Development Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main style={{
            minHeight: '100vh',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
