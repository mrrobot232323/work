import React from 'react';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/footer';
import Privacy from '../components/privacy/privacy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy & Policy | Orbies",
  description: "Read the Privacy Policy and Child Safety Standards of Orbies.in. Your data security and safety are our top priorities.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans relative">
      <Navbar />
      <div className="w-full">
        <Privacy />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
