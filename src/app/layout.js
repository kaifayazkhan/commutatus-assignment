// pages/_app.js
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Commutatus Assignment',
  description: 'Commutatus Hierarchy UI - Assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <div className="w-72 bg-gray-800 text-white h-full relative">
            <Sidebar />
          </div>
          <div className="w-[calc(100vw_-_288px)]">{children}</div>
        </div>
      </body>
    </html>
  );
}