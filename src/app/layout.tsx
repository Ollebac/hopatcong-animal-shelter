import './scss/app.scss';
import './scss/shelter.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hopatcong Animal Shelter',
  description: 'Hopatcong Animal Shelter located in Hopatcong, New Jersey.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <main className='main_content'>
          {children}
          <div className='line_break line_break_footer'></div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
