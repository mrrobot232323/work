import React from 'react';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/footer';
import Support from '../components/support/support';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support | Orbies",
  description: "Get help with Orbee. Contact our support team for any issues or questions about your account and the app.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans relative">
      <Navbar />
      <div className="w-full">
        <Support />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
