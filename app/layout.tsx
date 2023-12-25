import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import FollowBar from '@/components/layout/FollowBar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home / X',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
            <Sidebar />
            <div
              className="
                col-span-3 
                lg:col-span-2 
                border-x-[1px] 
                border-neutral-800
            "
            >
              {children}
            </div>
            <FollowBar />
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
